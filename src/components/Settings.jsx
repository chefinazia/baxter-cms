import React from "react";
import Input from "./Input";

const Settings = () => {
  const therapyModes = ["Low", "High"];

  return (
    <div className="p-4 bg-white -ml-4 -mr-4">
      <div className="bg-blue-500 text-white py-2 px-4 mb-4 -mt-8 -mx-4 h-9"></div>
      <div className="mb-4">
        <Input
          label="Settings Mode"
          options={therapyModes}
          defaultValue="Low-Fill"
        />
      </div>
    </div>
  );
};

export default Settings;