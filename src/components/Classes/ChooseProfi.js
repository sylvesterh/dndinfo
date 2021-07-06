import React from "react";

const ChooseProfi = ({ choice }) => {
  return (
    <div>
      <ol>
        {choice.map((choice) => {
          return <li key={choice.name}>{choice.name}</li>})}
      </ol>
    </div>
  );
};

export default ChooseProfi;
