import React from "react";
import { Link } from "react-router-dom";
import availClasses from "./list.json";

const Class = () => {
  let list = availClasses.map((item) => {
    return (
      <div className="classID" key={item.index}>
        <h4>
          <Link to={"/class/" + item.index}>{item.name}</Link>
        </h4>
      </div>
    );
  });
  return <div>{list}</div>;
};

export default Class;
