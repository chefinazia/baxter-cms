import React from "react";
import DropDownInput from "./DropDownInput";
import { THERAPY_MODES } from "../constants/mockData";

const Settings = () => {
  return (
    <div className="p-4 bg-white -ml-4 -mr-4">
      <div className="bg-blue-500 text-white py-2 px-4 mb-4 -mt-8 -mx-4 h-9"></div>
      <div className="mb-4">
        <DropDownInput
          label="Settings Mode"
          options={THERAPY_MODES}
          defaultValue="Low-Fill"
        />
      </div>
    </div>
  );
};

export default Settings;