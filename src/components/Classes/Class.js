import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

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
      {classList.map((item) => (
        <div className="classID" key={item.index}>
          <h4>
            <Link to={"/classes/" + item.index}>{item.name}</Link>
          </h4>
        </div>
      ))}
    </div>
  );
};

export default Class;
