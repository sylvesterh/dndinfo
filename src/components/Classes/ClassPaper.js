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
    borderRadius: 20,
  },
  head: {
    backgroundColor: "#FDFF8699",
    textShadow: "1px black",
    borderRadius: 30,
  },
  para: {
    padding: theme.spacing(1),
    fontWeight: "bold",
    borderRadius: 40,
    backgroundColor: "#ec747460",
  },
}));

const ClassPaper = ({ paperData }) => {
  const classes = useStyles();
  console.log(paperData.chosenGear)
  return (
    <Container>
      <div>
        <Grid container spacing={4} direction="row">
          <Grid item xs={12} md={4} lg={4}>
            <Paper elevation={5} className={classes.paper}>
              <Typography variant="h6" className={classes.head} align="center">
                {paperData.name} Basics
              </Typography>
              <Typography paragraph className={classes.para}>
                Sub-class:
              </Typography>
              <Typography variant="body2">
                <li>{paperData.subclass}</li>
              </Typography>
              <Typography paragraph className={classes.para}>
                Dice Point:
              </Typography>
              <Typography variant="body2">
                <li>{paperData.dice}</li>
              </Typography>
              <Typography paragraph className={classes.para}>
                Saving Throw/ Main Stats:
              </Typography>
              <Typography variant="body2">
                {paperData?.savingThrows?.map((stat) => (
                  <li key={stat?.index}>{stat?.name}</li>
                ))}
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Paper elevation={5} className={classes.paper}>
              <Typography variant="h6" className={classes.head} align="center">
                Innate Class Proficiencies:
              </Typography>
              {paperData?.prof?.map((item) => {
                return <li key={item?.name}>{item?.name}</li>;
              })}
            </Paper>
          </Grid>
          <Grid item xs={12} md={4} lg={4}>
            <Paper elevation={5} className={classes.paper}>
              <Typography variant="h6" className={classes.head} align="center">
                Choice of {paperData.choices} proficiencies below:
              </Typography>
              {paperData?.chooseProfi?.map((choice) => {
                return <li key={choice?.name}>{choice?.name}</li>;
              })}
            </Paper>
          </Grid>
          <Grid item xs={12} md={4} lg={4}>
            <Paper elevation={5} className={classes.paper}>
              <Typography variant="h6" className={classes.head} align="center">
                Starting Equipment
              </Typography>
              {paperData.startingGear?.map((opt) => (
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
              {paperData?.chosenGear?.map((opt) => (
                <li key={opt?.equipment?.index}>
                  {opt?.quantity} {opt?.equipment?.name}
                  {opt?.equipment_option?.choose} {opt?.equipment_option?.from?.equipment_category?.name}
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
