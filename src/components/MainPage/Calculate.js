import React, { useState, useEffect } from "react";
import RaceSelect from "./RaceSelect";
import ClassSelect from "./ClassSelect";
import { useHistory } from "react-router-dom";

const Calculate = () => {
  const history = useHistory();
  const [raceChange, setRaceChange] = useState();
  const [classChange, setClassChange] = useState();
  const [classList, setClassList] = useState([]);
  const [raceList, setRaceList] = useState([]);
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

  const handleRaceChange = (event) => {
    const race = event.target.value;
    setRaceChange(race);
  };

  const handleClassChange = (event) => {
    const chooseClass = event.target.value;
    setClassChange(chooseClass);
  };

  const handleSubmit = () => {
    const selectClassUrl = `${classUrl}${classChange}`;
    const selectRaceUrl = `${raceUrl}${raceChange}`;

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
        chooseProfi: json?.proficiency_choices[0].from,
        choices: json?.proficiency_choices[0].choose,
        savingThrows: json?.saving_throws,
        subclass: json?.subclasses[0].name,
        startingGear: json?.starting_equipment,
        chooseGear: json?.starting_equipment_options[0].choose,
        chosenGear: json?.starting_equipment_options[0].from,
      });
    };

    makeClassApiCall();
    makeRaceApiCall();

    history.push(`/simulate/${raceChange}/${classChange}`);
  };

  return (
    <div>
      <select onChange={handleRaceChange}>
        <option>Select Race</option>
        {raceList.map((item) => (
          <option value={item.index}>{item.name}</option>
        ))}
      </select>
      <select onChange={handleClassChange}>
        <option>Select Class</option>
        {classList.map((item) => (
          <option value={item.index}>{item.name}</option>
        ))}
      </select>
      <button onClick={handleSubmit}>Submit</button>
      <div className="card-handler">
        <RaceSelect raceData={race} />
        <ClassSelect classInfo={classData} />
      </div>
    </div>
  );
};

export default Calculate;
