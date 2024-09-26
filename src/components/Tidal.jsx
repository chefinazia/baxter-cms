import React from "react";
import Input from "./Input";

const Tidal = () => {
  const therapyModes = ["Low-Fill", "High-Fill"];
  const smartDwells = ["Adjust Dwells Up and Down", "Adjust Dwells Up Only"];

  return (
    <div className="p-4 bg-white -ml-4 -mr-4">
      <div className="bg-blue-500 text-white py-2 px-4 mb-4 -mt-8 -mx-4 h-9"></div>
      <div className="mb-4">
        <Input
          label="Tidal Program Name"
          isInput={true}
          placeholder="Enter Tidal"
        />
      </div>
    </div>
  );
};

export default Tidal;