import { Grid, Paper, TextField, Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import IconButton from "@material-ui/core/IconButton";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import { makeStyles } from "@material-ui/core/styles";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import SendIcon from "@material-ui/icons/Send";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import ClassSelect from "./ClassSelect";
import LevelSystem from "./LevelSystem";
import RaceSelect from "./RaceSelect";
import { useParams } from "react-router";

const useStyles = makeStyles((theme) => ({
  header: {
    color: "white",
    margin: theme.spacing(3),
    fontFamily: "wittenberg-schwabacher",
    padding: theme.spacing(1),
    fontStyle: "italic",
  },
  button: {
    margin: theme.spacing(1),
  },
  root: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  select: {
    textAlign: "center",
  },
  formControl: {
    margin: theme.spacing(3),
    minWidth: 120,
    backgroundColor: "#FEFAE099",
  },
  variable: {
    backgroundColor: "#DDB89299",
  },
  charLevel: {
    backgroundColor: "#FEFAE099",
  },
}));

const Calculate = () => {
  const params = useParams();
  const classes = useStyles();
  const history = useHistory();
  const [raceChange, setRaceChange] = useState(params.selectRaceID);
  const [classChange, setClassChange] = useState(params.selectClassID);
  const [classList, setClassList] = useState([]);
  const [raceList, setRaceList] = useState([]);
  const [level, setLevel] = useState(
    params.selectLevel === undefined ? 1 : params.selectLevel
  );
  const [race, setRace] = useState({
    name: "",
    speed: "",
    bonuspoint: "",
    bonusability: [],
    alignment: "",
    size: "",
    sizedesc: "",
    age: "",
    lang: [],
    langdesc: "",
    traits: [],
    chooseTrait: "",
    chosenTrait: [],
  });
  const [classData, setClassData] = useState({
    name: "",
    dice: "",
    chooseProfi: [],
    innateProfi: [],
    choices: "",
    savingThrows: [],
    subclass: "",
    startingGear: [],
    chooseGear: "",
    chosenGear: [],
  });
  const [classLevel, setClassLevel] = useState({
    level: "",
    abilityBonus: "",
    profiBonus: "",
    spellcasting: {},
    classSpecDice: {},
    levelFeatures: [],
  });

  const raceUrl = "https://www.dnd5eapi.co/api/races/";
  const classUrl = "https://www.dnd5eapi.co/api/classes/";

  useEffect(() => {
    const makeApiCall = async () => {
      const res = await fetch(classUrl);
      const json = await res.json();
      setClassList(json.results);
    };
    makeApiCall();
  }, []);

  useEffect(() => {
    const makeApiCall = async () => {
      const res = await fetch(raceUrl);
      const json = await res.json();
      setRaceList(json.results);
    };
    makeApiCall();
  }, []);

  useEffect(() => {
    if (raceChange || classChange || level !== undefined) {
      const selectClassUrl = `${classUrl}${classChange}`;
      const selectRaceUrl = `${raceUrl}${raceChange}`;
      const classLevelUrl = `${classUrl}${classChange}/levels/${level}`;

      const makeRaceApiCall = async () => {
        const res = await fetch(selectRaceUrl);
        const json = await res?.json();
        setRace({
          name: json.name,
          speed: json.speed,
          bonusability: json.ability_bonuses,
          alignment: json.alignment,
          size: json.size,
          sizedesc: json.size_description,
          age: json.age,
          lang: json.languages,
          langdesc: json.language_desc,
          traits: json.traits,
          chooseTrait: json?.trait_options?.choose,
          chosenTrait: json?.trait_options?.from,
        });
      };

      const makeClassApiCall = async () => {
        const res = await fetch(selectClassUrl);
        const json = await res.json();
        setClassData({
          name: json?.name,
          dice: json?.hit_die,
          prof: json?.proficiencies,
          chooseProfi: json?.proficiency_choices?.[0]?.from,
          choices: json?.proficiency_choices?.[0]?.choose,
          savingThrows: json?.saving_throws,
          subclass: json?.subclasses?.[0]?.name,
          startingGear: json?.starting_equipment,
          chooseGear: json?.starting_equipment_options?.[0]?.choose,
          chosenGear: json?.starting_equipment_options?.[0]?.from,
        });
      };
      const makeClassLevelApiCall = async () => {
        const res = await fetch(classLevelUrl);
        const json = await res.json();
        setClassLevel({
          level: json.level,
          abilityBonus: json.ability_score_bonuses,
          profiBonus: json.prof_bonus,
          spellcasting: json.spellcasting,
          classSpecDice: json.class_specific,
          levelFeatures: json.features,
        });
      };
      makeClassApiCall();
      makeClassLevelApiCall();
      makeRaceApiCall();
    }
  }, [classChange,level,raceChange]);

  const handleRaceChange = (event) => {
    const race = event.target.value;
    setRaceChange(race);
  };

  const handleClassChange = (event) => {
    const chooseClass = event.target.value;
    setClassChange(chooseClass);
  };

  const handleSubmit = () => {
    if (classChange || raceChange !== undefined) {
      history.push(`/simulate/${raceChange}/${classChange}/${level}`);
    } else {
      history.push(`/simulate`);
    }
  };

  const handleMinus = () => {
    if (level > 1) {
      const current = level - 1;
      setLevel(current);
    } else {
      setLevel(1);
    }
  };

  const handleAdd = () => {
    if (level < 20) {
      const current = level + 1;
      setLevel(current);
    } else {
      setLevel(level);
    }
  };

  return (
    <div>
      <div className={classes.select}>
        <Grid container direction="column" alignItems="center" justify="center">
          <Typography variant="h2" className={classes.header}>
            Create Your Character
          </Typography>
          <Paper className={classes.variable}>
            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel id="demo-simple-select-outlined-label">
                Select Race
              </InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={raceChange}
                onChange={handleRaceChange}
                label="Race"
              >
                <MenuItem value="">
                  <em>Select Race</em>
                </MenuItem>
                {raceList.map((item) => (
                  <MenuItem value={item.index}>{item.name}</MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel id="demo-simple-select-outlined-label">
                Select Class
              </InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={classChange}
                onChange={handleClassChange}
                label="Class"
              >
                <MenuItem value="">
                  <em>Select Class</em>
                </MenuItem>
                {classList.map((item) => (
                  <MenuItem value={item.index}>{item.name}</MenuItem>
                ))}
              </Select>
            </FormControl>

            <br></br>
            <IconButton color="primary" onClick={handleMinus}>
              <RemoveIcon />
            </IconButton>
            <TextField
              id="outlined-read-only-input"
              className={classes.charLevel}
              label="Character Level"
              value={level}
              InputProps={{
                readOnly: true,
              }}
              variant="outlined"
            />
            <IconButton color="primary" onClick={handleAdd}>
              <AddIcon />
            </IconButton>
            <br></br>
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              endIcon={<SendIcon />}
              onClick={handleSubmit}
            >
              Submit
            </Button>
          </Paper>
        </Grid>
      </div>
      <div className={classes.root}>
        <Grid
          container
          spacing={2}
          direction="row"
          justify="center"
          alignItems="flex-start"
        >
          <RaceSelect raceData={race} />
          <ClassSelect classInfo={classData} />
          <LevelSystem levelData={classLevel} />
        </Grid>
      </div>
    </div>
  );
};

export default Calculate;
