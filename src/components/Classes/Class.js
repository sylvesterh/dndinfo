import {
  ListItem,
  ListItemText,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core";
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
    textAlign: "center"
  },
}));

const Class = () => {
  const classes = useStyles();
  const [classList, setClassList] = useState([]);
  const url = "https://www.dnd5eapi.co/api/classes";

  useEffect(() => {
    const makeApiCall = async () => {
      const res = await fetch(url);
      const json = await res.json();
      setClassList(json.results);
    };
    makeApiCall();
  }, []);

  return (
    <div>
      <Container maxWidth="sm">
        <Typography variant="h2" className={classes.header}>
          Classes
        </Typography>
        <Paper className={classes.paper}>
          {classList.map((item) => (
            <ListItem
              button
              key={item.index}
              component={Link}
              to={"/classes/" + item.index}
            >
              <ListItemText className={classes.listname}>
                {item.name}
              </ListItemText>
            </ListItem>
          ))}
        </Paper>
      </Container>
    </div>
  );
};

export default Class;
