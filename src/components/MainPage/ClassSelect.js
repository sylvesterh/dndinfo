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
    display: "inline-block",
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

const ClassSelect = ({ classInfo }) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  
  return (
    <div>
      <Card elevation={12} className={classes.root}>
        <CardHeader title={classInfo.name} />
        <CardContent>
          <Typography paragraph color={"textPrimary"}>
            Dice Point: {classInfo.dice}
          </Typography>
          <Typography paragraph color={"textPrimary"}>
            Starting Gear:
          </Typography>
          <Typography paragraph color={"textSecondary"}>
            {classInfo.startingGear.map((gear) => (
              <p key={gear.equipment.index}>
                {gear.equipment.name} x {gear.quantity}
              </p>
            ))}
          </Typography>
          <Typography paragraph color={"textPrimary"}>
            Saving Throw/ Main Stats:
          </Typography>
          <Typography color={"textSecondary"} display={"block"}>
            {classInfo.savingThrows.map((item) => (
              <li key={item.index}>{item.name}</li>
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
            {/* <Typography paragraph color={"textSecondary"}>
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
            </Typography> */}
          </CardContent>
        </Collapse>
      </Card>
    </div>
  );
};

export default ClassSelect;
