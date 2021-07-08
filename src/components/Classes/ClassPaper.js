import React from "react";
import { Grid, Paper, Typography } from "@material-ui/core";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  paper: {
    margin: theme.spacing(3),
    minWidth: 120,
    textAlign: "center",
    backgroundColor: "#F4F4F499",
    color: "black",
    padding: 10,
    borderRadius: 20
  },
  head: {
    backgroundColor: "#ec7474",
    textShadow: "1px black",
    borderRadius: 30
  }
}));

const ClassPaper = ({ paperData }) => {
  const classes = useStyles();
  return (
    <Container>
      <div>
        <Grid container spacing={4} direction="row">
          <Grid item xs={12} md={4} lg={4}>
            <Paper elevation={5} className={classes.paper}>
              <Typography variant="h6" className={classes.head} align="center">
                {paperData.name} Basics
              </Typography>
              <h4>Sub-class: </h4>
              <li>{paperData.subclass}</li>
              <h4>Dice Point: </h4>
              <li>{paperData.dice}</li>
              <h4>Saving Throw/ Main Stats</h4>
              {paperData.savingThrows &&
                paperData?.savingThrows?.map((stat) => (
                  <li key={stat?.index}>{stat?.name}</li>
                ))}
            </Paper>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Paper elevation={5} className={classes.paper}>
              <Typography variant="h6" className={classes.head} align="center">
                Innate Class Proficiencies:
              </Typography>
              {paperData.prof &&
                paperData?.prof?.map((item) => {
                  return <li key={item?.name}>{item?.name}</li>;
                })}
            </Paper>
          </Grid>
          <Grid item xs={12} md={4} lg={4}>
            <Paper elevation={5} className={classes.paper}>
              <Typography variant="h6" className={classes.head} align="center">
                Choice of {paperData.choices} proficiencies below:
              </Typography>
              {paperData.chooseProfi &&
                paperData?.chooseProfi?.map((choice) => {
                  return <li key={choice?.name}>{choice?.name}</li>;
                })}
            </Paper>
          </Grid>
          <Grid item xs={12} md={4} lg={4}>
            <Paper elevation={5} className={classes.paper}>
              <Typography variant="h6" className={classes.head} align="center">
                Starting Equipment
              </Typography>
              {paperData.startingGear &&
                paperData.startingGear?.map((opt) => (
                  <li key={opt?.equipment?.index}>
                    {opt?.equipment?.name} x {opt?.quantity}
                  </li>
                ))}
            </Paper>
          </Grid>
          <Grid item xs={12} md={4} lg={4}>
            <Paper elevation={5} className={classes.paper}>
              <Typography variant="h6" className={classes.head} align="center">
                Choice of {paperData.chooseGear} optional gear below:
              </Typography>
              {paperData?.chosenGear &&
                paperData.chosenGear?.map((opt) => (
                  <li key={opt?.equipment?.index}>
                    {opt?.equipment?.name} x {opt?.quantity}
                  </li>
                ))}
            </Paper>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
};

export default ClassPaper;
