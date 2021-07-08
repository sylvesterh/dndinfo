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
    backgroundColor: "#EDE0D499"
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
            {classInfo?.startingGear?.map((gear) => (
              <li key={gear.equipment.index}>
                {gear?.equipment.name} x {gear?.quantity}
              </li>
            ))}
          </Typography>
          <Typography paragraph color={"textPrimary"}>
            Saving Throw/ Main Stats:
          </Typography>
          <Typography color={"textSecondary"} display={"block"}>
            {classInfo?.savingThrows?.map((item) => (
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
              Sub-class:
            </Typography>
            <Typography paragraph color={"textSecondary"}>
              <li>{classInfo.subclass}</li>
            </Typography>
            <Typography paragraph color={"textSecondary"}>
              Racial Proficiencies:
            </Typography>
            <Typography paragraph color={"textSecondary"}>
              {classInfo?.prof?.map((innate) => (
                <li key={innate?.index}>{innate?.name}</li>
              ))}
            </Typography>
            <Typography paragraph color={"textSecondary"}>
              Choice of {classInfo.chooseGear} optional starting gears:
            </Typography>
            <Typography paragraph color={"textSecondary"}>
              {classInfo?.chosenGear?.map((gear) => (
                <li key={gear?.equipment?.index}>
                  {gear?.equipment?.name} x {gear?.quantity}
                </li>
              ))}
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    </div>
  );
};

export default ClassSelect;
