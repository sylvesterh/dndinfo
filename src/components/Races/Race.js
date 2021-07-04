import React from "react";
import { Link } from "react-router-dom";
import availRaces from "./race.json";

const Race = () => {
  let list = availRaces.map((item) => {
    return (
      <div className="raceID" key={item.index}>
        <h4>
          <Link to={"/races/" + item.index}>{item.name}</Link>
        </h4>
      </div>
    );
  });
  return <div>{list}</div>;
};

export default Race;
