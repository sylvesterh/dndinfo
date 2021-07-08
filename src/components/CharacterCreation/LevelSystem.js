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

const LevelSystem = ({ levelData }) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div>
      <Card elevation={12} className={classes.root}>
        <CardHeader title="Level Guide" />
        <CardContent>
          <Typography paragraph color={"textPrimary"}>
            Level: {levelData?.level}
          </Typography>
          <Typography paragraph color={"textPrimary"}>
            Ability score bonuses: {levelData?.abilityBonus}
          </Typography>
          <Typography paragraph color={"textPrimary"}>
            Proficiency bonus: {levelData?.profiBonus}
          </Typography>
          <Typography paragraph color={"textPrimary"}>
            Level Features:
          </Typography>
          <Typography color={"textSecondary"} display={"block"}>
            {levelData?.levelFeatures?.map((item) => (
              <li key={item?.index}>{item?.name}</li>
            ))}
          </Typography>
          <Typography paragraph color={"textPrimary"}>
            Class Specific Dices:
          </Typography>
          <Typography color={"textSecondary"} display={"block"}>
            {levelData.classSpecDice !== undefined || null
              ? Object.entries(levelData?.classSpecDice).map(([key, value]) => (
                  <li key={value}>
                    {key} : {value.toString()}
                  </li>
                ))
              : "None"}
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
            <Typography paragraph color={"textPrimary"}>
              Spell slots:
            </Typography>
            <Typography color={"textSecondary"} display={"block"}>
              {levelData.spellcasting !== undefined || null
                ? Object.entries(levelData?.spellcasting).map(
                    ([key, value]) => (
                      <li key={value}>
                        {key} : {value.toString()}
                      </li>
                    )
                  )
                : "None"}
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    </div>
  );
};

export default LevelSystem;
