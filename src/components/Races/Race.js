import { ListItem, ListItemText, makeStyles, Paper, Typography } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  listname: {
    textAlign: "center",
  },
  paper: {
    backgroundColor: "#C6C7C090",
  },
  header: {
    color: "white",
    fontFamily: "wittenberg-schwabacher",
    fontStyle: "italic",
    textAlign: "center",
  },
}));

const Race = () => {
  const classes = useStyles();
  const [raceList, setRaceList] = useState([]);
  const url = "https://www.dnd5eapi.co/api/races";

  useEffect(() => {
    const makeApiCall = async () => {
      const res = await fetch(url);
      const json = await res.json();
      setRaceList(json.results);
    };
    makeApiCall();
  }, []);

  return (
    <Container maxWidth="sm">
      <Typography variant="h2" className={classes.header}>
        Races
      </Typography>
      <Paper className={classes.paper}>
        {raceList.map((item) => (
          <ListItem
            button
            key={item.index}
            component={Link}
            to={"/races/" + item.index}
          >
            <ListItemText className={classes.listname}>
              {item.name}
            </ListItemText>
          </ListItem>
        ))}
      </Paper>
    </Container>
  );
};

export default Race;
