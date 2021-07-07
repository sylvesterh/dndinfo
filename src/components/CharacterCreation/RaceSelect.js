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
    width: 300,
    maxWidth: 300,
    marginRight: 30,
    marginBottom: 30,
    backgroundColor: "#EDE0D4"
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

const RaceSelect = ({ raceData }) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div>
      <Card elevation={12} className={classes.root}>
        <CardHeader title={raceData?.name} />
        <CardContent>
          <Typography paragraph color={"textPrimary"}>
            Speed: {raceData?.speed}
          </Typography>
          <Typography paragraph color={"textPrimary"}>
            Size: {raceData?.size}
          </Typography>
          <Typography paragraph color={"textPrimary"}>
            Race Ability Bonuses:
          </Typography>
          <Typography color={"textSecondary"} display={"block"}>
            {raceData?.bonusability?.map((item) => (
              <li key={item?.ability_score?.index}> {item?.bonus} {item?.ability_score?.name}</li>
            ))}
          </Typography>
          <Typography paragraph color={"textPrimary"}>
            Languages:
          </Typography>
          <Typography color={"textSecondary"} display={"block"}>
            {raceData?.lang?.map((item) => (
              <li key={item?.index}>{item?.name}</li>
            ))}
          </Typography>
          <Typography paragraph color={"textPrimary"}>
            Traits:
          </Typography>
          <Typography color={"textSecondary"} display={"block"}>
            {raceData?.traits?.map((item) => (
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
            Choice of {raceData.chooseTrait} Extra Trait:
          </Typography>
          <Typography color={"textSecondary"} display={"block"}>
            {raceData.chosenTrait !== undefined ? raceData.chosenTrait.map((item) => (
              <li key={item?.index}>{item?.name}</li>
            )) : "None"}
          </Typography>
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

export default RaceSelect;
