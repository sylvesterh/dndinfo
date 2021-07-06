import React from "react";

const ProvidedGear = ({ provided }) => {
  return (
    <div>
      <ol>
        {provided.map((gear) => (
          <li key={gear.equipment.index}>{gear.equipment.name} x {gear.quantity}</li>
        ))}
      </ol>
    </div>
  );
};

export default ProvidedGear;
