import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Grid } from "@material-ui/core";
import RaceCard from "./components/RaceCard"

const RaceInfo = (props) => {
  const params = useParams();
  const [status, setStatus] = useState("idle");
  const [race, setRace] = useState({
    name: "",
    speed: "",
    bonusability: [],
    alignment: "",
    size: "",
    sizedesc: "",
    age: "",
    lang: [],
    langdesc: "",
    traits: [],
    // chooseTrait: "",
    // chosenTrait: "",
  });

  const url = "https://www.dnd5eapi.co/api/races/";

  useEffect(() => {
    const strRace = params.raceID;
    const raceUrl = `${url}${strRace}`;

    const makeApiCall = async () => {
      setStatus("pending");
      try {
        const res = await fetch(raceUrl);
        const json = await res?.json();
        setRace({
          name: json?.name,
          speed: json?.speed,
          bonusability: json?.ability_bonuses,
          alignment: json?.alignment,
          size: json?.size,
          sizedesc: json?.size_description,
          age: json?.age,
          lang: json?.languages,
          langdesc: json?.language_desc,
          // traits: json?.traits,
        //   chooseTrait: json?.trait_options?.choose,
        //   chosenTrait: json?.trait_options?.from,
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
  }, [params.raceID]);

  const showDetails = (status) => {
    if (status === "idle") {
      return "Please select a race";
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
      <Grid container spacing={3}>
        <Grid item xs={12} md={8} lg={8}></Grid>
        <RaceCard data = {race}/>
        {showDetails(status)}
      </Grid>
    </div>
  );
};

export default RaceInfo;
