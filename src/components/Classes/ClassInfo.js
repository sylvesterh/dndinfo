import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import ClassPaper from "./ClassPaper";

const ClassInfo = (props) => {
  const params = useParams();
  const [status, setStatus] = useState("idle");
  const [data, setData] = useState({
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
          startingGear: json?.starting_equipment,
          chooseGear: json?.starting_equipment_options[0]?.choose,
          chosenGear: json?.starting_equipment_options[0]?.from,
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
      <ClassPaper paperData={data} />
      {showDetails(status)}
    </div>
  );
};

export default ClassInfo;
