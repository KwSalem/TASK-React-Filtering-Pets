import React from "react";

const SetType = ({ typePets }) => {
  return (
    <div>
      Type:
      <select className="form-select" onChange={typePets}>
        <option value="" selected>
          All
        </option>
        <option value="Cat">Cat</option>
        <option value="Dog">Dog</option>
        <option value="Rabbit">Rabbit</option>
      </select>
    </div>
  );
};

export default SetType;
