import React from "react";
import DropDownInput from "./DropDownInput";
import { THERAPY_MODES } from "../constants/mockData";
import Input from "./Input";

const Volume = () => {
  const handlePaste = (e) => {
    const pastedData = e.clipboardData.getData("Text");
    if (!/^[a-zA-Z0-9]*$/.test(pastedData)) {
      e.preventDefault();
    }
  };

  return (
    <div className="p-4 bg-white -ml-4 -mr-4">
      <div className="bg-blue-500 text-white py-2 px-4 mb-4 -mt-8 -mx-4 h-9"></div>
      <div className="mb-4">
        <Input
          label="Volume Program Name"
          type="text"
          placeholder="Enter volume"
          disabled={false}
          pattern="[A-Za-z]+"
          maxLength={3}
          onPaste = {handlePaste}
        />
      </div>

      <div className="mb-4">
        <DropDownInput
          label="Volume Mode"
          options={THERAPY_MODES}
          defaultValue="Low-Fill"
        />
      </div>
    </div>
  );
};

export default Volume;
