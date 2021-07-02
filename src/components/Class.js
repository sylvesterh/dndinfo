import React from "react";
import { Link } from "react-router-dom";
import availClasses from "./list.json";
import AvailClasses from "./AvailClasses";

const Class = () => {
  let list = availClasses.map((item) => {
    return (
      <div className="classID" key={item.index}>
        <p>
          <Link to={"/class/" + item.index}>{item.name}</Link>
        </p>
      </div>
    );
  });
  return <div>{list}</div>;
};

export default Class;
