import React from "react";

const Bonuses = ({bonus}) => {
  return (
    <div>
      {bonus.map((item) => {
        return item.bonus;
      })}
    </div>
  );
};

export default Bonuses;
