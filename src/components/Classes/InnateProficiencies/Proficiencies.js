import React from "react";

const Proficiencies = ({ innate }) => {
  return (
    <div>
      <ol>
        {innate.map((item) => {
          return <li key={item.name}>{item.name}</li>;
        })}
      </ol>
    </div>
  );
};

export default Proficiencies;
