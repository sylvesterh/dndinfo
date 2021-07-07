import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Container from "@material-ui/core/Container";

const Race = () => {
  const [raceList, setRaceList] = useState([]);
  const url = "https://www.dnd5eapi.co/api/races";

  useEffect(() => {
    const makeApiCall = async () => {
      const res = await fetch(url);
      const json = await res.json();
      setRaceList(json.results);
    };
    makeApiCall();
  }, []);

  return (
    <Container maxWidth="sm">
      <div>
        {raceList.map((item) => (
          <div className="raceID" key={item.index}>
            <h4>
              <Link to={"/races/" + item.index}>{item.name}</Link>
            </h4>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Race;
