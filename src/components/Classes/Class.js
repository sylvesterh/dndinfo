import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Container from "@material-ui/core/Container";

const Class = () => {
  const [classList, setClassList] = useState([]);
  const url = "https://www.dnd5eapi.co/api/classes";

  useEffect(() => {
    const makeApiCall = async () => {
      const res = await fetch(url);
      const json = await res.json();
      setClassList(json.results);
    };
    makeApiCall();
  }, []);

  return (
    <div>
      <Container maxWidth="sm">
        {classList.map((item) => (
          <div className="classID" key={item.index}>
            <h4>
              <Link to={"/classes/" + item.index}>{item.name}</Link>
            </h4>
          </div>
        ))}
      </Container>
    </div>
  );
};

export default Class;
