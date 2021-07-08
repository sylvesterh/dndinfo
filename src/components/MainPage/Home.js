import { Grid, makeStyles, Paper, Typography } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import React from "react";

const useStyles = makeStyles((theme) => ({
  paper: {
    margin: theme.spacing(3),
    minWidth: 120,
    textAlign: "center",
    backgroundColor:"#FAE1DD99",
    color: "black",
    padding: 10,
  },
  title: {
    fontFamily: "wittenberg-schwabacher",
    color: "white",
    textAlign: "center",
  },
}));

const Home = () => {
  const classes = useStyles();
  return (
    <Container maxWidth="md">
      <div>
        <Grid>
          <Typography variant="h2" className={classes.title}>
            Dungeons & Dragons
          </Typography>
          <Paper className={classes.paper}>
            <Typography paragraph>
              This application is supposed to be a simple tool for players to
              use to track the character race, class and levels. It helps newer players to see what they would possibly want for the ideal setup of their characters and the team.
            </Typography>
            <Typography paragraph>
              With my utter limited experience and knowledge of the game, I hope that this application may help the newbies see what are the important character information and which details are just secondary (good-to-know).
            </Typography>
          </Paper>
        </Grid>
      </div>
    </Container>
  );
};

export default Home;
