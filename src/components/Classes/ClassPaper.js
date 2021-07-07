import React from "react";
import { Grid, Paper, Typography } from "@material-ui/core";

const ClassPaper = ({ paperData }) => {
  return (
    <div>
      <Grid container spacing={4}>
        <Grid item xs={12} md={8} lg={8}>
          <Paper elevation={5}>
            <Typography variant="h6" align="center">
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
        <Grid item xs={12} md={8} lg={8}>
          <Paper elevation={5}>
            <Typography variant="h6" align="center">
              Innate Class Proficiencies:
            </Typography>
            {paperData.prof &&
              paperData?.prof?.map((item) => {
                return <li key={item?.name}>{item?.name}</li>;
              })}
          </Paper>
        </Grid>
        <Grid item xs={12} md={8} lg={8}>
          <Paper elevation={5}>
            <Typography variant="h6" align="center">
              Choice of {paperData.choices} proficiencies below:
            </Typography>
            {paperData.chooseProfi &&
              paperData?.chooseProfi?.map((choice) => {
                return <li key={choice?.name}>{choice?.name}</li>;
              })}
          </Paper>
        </Grid>
        <Grid item xs={12} md={8} lg={8}>
          <Paper elevation={5}>
            <Typography variant="h6" align="center">
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
        <Grid item xs={12} md={8} lg={8}>
          <Paper elevation={5}>
            <Typography variant="h6" align="center">
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
  );
};

export default ClassPaper;
