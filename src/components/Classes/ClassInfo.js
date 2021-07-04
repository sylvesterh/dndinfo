// import ChooseGear from "./StarterGears/ChooseGear";
import { Grid, Paper, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Proficiencies from "./InnateProficiencies/Proficiencies";
import ChooseProfi from "./ProficiencyChoices/ChooseProfi";
import ProvidedGear from "./StarterGears/ProvidedGear";
import SavingThrow from "./Stats/SavingThrow";

const ClassInfo = (props) => {
  const params = useParams();
  const [status, setStatus] = useState("idle");
  const [data, setData] = useState({
    name: "",
    dice: "",
    chooseProfi: "",
    innateProfi: "",
    choices: "",
    savingThrows: "",
    subclass: "",
  });
  const [equip,setEquip] = useState({
    startingGear: "",
    chooseGear: "",
    chosenGear: "",
  })
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
          dice: json.hit_die,
          prof: json.proficiencies,
          chooseProfi: json.proficiency_choices[0].from,
          choices: json.proficiency_choices[0].choose,
          savingThrows: json.saving_throws,
          subclass: json.subclasses[0].name,
        });
        setEquip({
          startingGear: json.starting_equipment,
          chooseGear: json.starting_equipment_options[0].choose,
          chosenGear: json.starting_equipment_options[0].from,
        })
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
      return "Please select a class";
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
      <Grid container spacing={4}>
        <Grid item xs={12} md={8} lg={8}>
          <Paper elevation={5}>
            <Typography variant="h6" align="center">{data.name} Basics</Typography>
            <h4>Sub-class: </h4> {data.subclass}
            <h4>Dice Point: </h4>
            {data.dice}
            <h4>Saving Throw/ Main Stats</h4>
            {data.savingThrows && <SavingThrow stats={data.savingThrows} />}
          </Paper>
        </Grid>
        <Grid item xs={12} md={8} lg={8}>
          <Paper elevation={5}>
            <Typography variant="h6" align="center">Innate Class Proficiencies:</Typography>
            {data.prof && <Proficiencies innate={data.prof} />}
          </Paper>
        </Grid>
        <Grid item xs={12} md={8} lg={8}>
          <Paper elevation={5}>
            <Typography variant="h6" align="center">
              Choice of {data.choices} proficiencies below:
            </Typography>
            {data.chooseProfi && <ChooseProfi choice={data.chooseProfi} />}
          </Paper>
        </Grid>
        <Grid item xs={12} md={8} lg={8}>
          <Paper elevation={5}>
            <Typography variant="h6" align="center">Starting Equipment</Typography>
            {equip.startingGear && <ProvidedGear provided={equip.startingGear} />}
          </Paper>
        </Grid>
        <Grid item xs={12} md={8} lg={8}>
          <Paper elevation={5}>
            <Typography variant="h6" align="center">
              Choice of {equip.chooseGear} optional gear below:
            </Typography>
            {/* {equip.chosenGear && <ChooseGear optgear={equip.chosenGear} />} */}
          </Paper>
        </Grid>
        {showDetails(status)}
      </Grid>
    </div>
  );
};

export default ClassInfo;
