import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import Proficiencies from "../InnateProficiencies/Proficiencies";
import ChooseProfi from "../ProficiencyChoices/ChooseProfi"
import { Grid, Paper, Typography } from "@material-ui/core";

const ClassInfo = (props) => {
  const params = useParams();
  const [status, setStatus] = useState("idle");
  const [data, setData] = useState({
    name: "",
    hp: "",
    chooseProfi: "",
    innateProfi: "",
    choices: "",
  });
  const url = "https://www.dnd5eapi.co/api/classes/";

  useEffect(() => {
    const strClass = params.classID;
    const classUrl = `${url}${strClass}`;

    const makeApiCall = async () => {
      setStatus("pending");
      try {
        const res = await fetch(classUrl);
        const json = await res.json();
        setData({
          name: json.name,
          hp: json.hit_die,
          prof: json.proficiencies,
          chooseProfi: json.proficiency_choices[0].from,
          choices: json.proficiency_choices[0].choose
        });
      } catch (error) {
        setStatus("error");
        alert(error);
      } finally {
        setStatus("resolved");
        return;
      }
    };
    makeApiCall();
  }, [params.classID]);

  const showDetails = (status) => {
    if (status === "idle") {
      return "Please enter a currency";
    }
    if (status === "pending") {
      return "Loading...";
    }
    if (status === "resolved") {
      return;
    }
    if (status === "error") {
      return;
    }
  };

  return (
    <div>
      <Grid container>
        <Grid item xs={12} md={12} lg={12}>
          <Paper elevation={5}>
            <Typography variant="h6">Class: {data.name}</Typography>
            <p>Hit Points: {data.hp}</p>
          </Paper>
        </Grid>
        <Grid item xs={12} md={12} lg={12}>
          <Paper elevation={5}>
            <Typography variant="h6">Innate Class Proficiencies:</Typography>
            {data.prof && <Proficiencies innate={data.prof} />}
          </Paper>
        </Grid>
        <Grid item xs={12} md={12} lg={12}>
          <Paper elevation={5}>
            <Typography variant="h6">
              Choice of {data.choices} proficiencies below:
            </Typography>
            {data.chooseProfi && <ChooseProfi choice={data.chooseProfi} />}
          </Paper>
        </Grid>
        {showDetails(status)}
      </Grid>
    </div>
  );
};

export default ClassInfo;
