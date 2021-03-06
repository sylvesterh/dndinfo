import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Collapse,
  Container,
  Grid,
  IconButton,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import clsx from "clsx";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 350,
    maxWidth: 350,
    marginRight: 30,
    marginBottom: 30,
    backgroundColor: "#F4F4F499",
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  title: {
    backgroundColor: "#FDFF8699",
  }
}));

const RaceCard = ({ data }) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Container>
      <Grid
        container
        spacing={2}
        direction="row"
        justify="center"
        alignItems="flex-start"
      >
        <div>
          <Card elevation={12} className={classes.root}>
            <CardHeader title={data.name} className={classes.title} />
            <CardContent>
              <Typography paragraph color={"textPrimary"}>
                Speed: {data.speed}
              </Typography>
              <Typography paragraph color={"textPrimary"}>
                Size: {data.size}
              </Typography>
              <Typography paragraph color={"textPrimary"}>
                Languages:
              </Typography>
              <Typography color={"textPrimary"} display={"block"}>
                {data.lang.map((item) => (
                  <li key={item?.index}>{item?.name}</li>
                ))}
              </Typography>
            </CardContent>
            <CardActions>
              <IconButton
                className={clsx(classes.expand, {
                  [classes.expandOpen]: expanded,
                })}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </IconButton>
            </CardActions>
            <Collapse in={expanded} unmountOnExit>
              <CardContent>
                <Typography paragraph color={"textSecondary"}>
                  Alignment:
                </Typography>
                <Typography paragraph color={"textSecondary"}>
                  {data.alignment}
                </Typography>
                <Typography paragraph color={"textSecondary"}>
                  Language
                </Typography>
                <Typography paragraph color={"textSecondary"}>
                  {data.langdesc}
                </Typography>
                <Typography paragraph color={"textSecondary"}>
                  Age:
                </Typography>
                <Typography paragraph color={"textSecondary"}>
                  {data.age}
                </Typography>
                <Typography paragraph color={"textSecondary"}>
                  Size Description:
                </Typography>
                <Typography paragraph color={"textSecondary"}>
                  {data.sizedesc}
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
        </div>
      </Grid>
    </Container>
  );
};

export default RaceCard;
