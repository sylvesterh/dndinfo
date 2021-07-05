import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Typography,
  Collapse,
  IconButton,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 500,
    maxWidth: 500,
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
}));

const Calculated = ({ raceData }, { classData }) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  console.log(classData,raceData)

  return (
    <div>
      <Card elevation={12} className={classes.root}>
        <CardHeader title={raceData.name} />
        <CardContent>
          <Typography paragraph color={"textPrimary"}>
            Speed: {raceData.speed}
          </Typography>
          <Typography paragraph color={"textPrimary"}>
            Size: {raceData.size}
          </Typography>
          <Typography paragraph color={"textPrimary"}>
            Languages:
          </Typography>
          <Typography color={"textPrimary"} display={"block"}>
            {raceData.lang.map((item) => (
              <q key={item?.index}>{item?.name}</q>
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
              {raceData.alignment}
            </Typography>
            <Typography paragraph color={"textSecondary"}>
              Language
            </Typography>
            <Typography paragraph color={"textSecondary"}>
              {raceData.langdesc}
            </Typography>
            <Typography paragraph color={"textSecondary"}>
              Age:
            </Typography>
            <Typography paragraph color={"textSecondary"}>
              {raceData.age}
            </Typography>
            <Typography paragraph color={"textSecondary"}>
              Size Description:
            </Typography>
            <Typography paragraph color={"textSecondary"}>
              {raceData.sizedesc}
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    </div>
  );
};

export default Calculated;
