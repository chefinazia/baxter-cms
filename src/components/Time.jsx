import React from "react";
import GenericButton from "./GenericButton";
import DropDownInput from "./DropDownInput";
import { THERAPY_MODES, SMART_DWELLS } from "../constants/mockData";
import Input from "./Input";

const Time = ({
  minRange = "0:10",
  maxRange = "48:00",
  increment = "0:10",
}) => {
  return (
    <>
      <div className="border-b-2 p-4 bg-white -ml-4 -mr-4">
        <div className="bg-blue-500 text-white py-2 px-4 mb-4 -mt-8 -mx-4 h-9"></div>
        <div className="mb-4">
          <Input
            label="Device Program Name"
            type="text"
            placeholder="Enter name"
          />
        </div>

        <div className="mb-4">
          <DropDownInput
            label="Therapy Mode"
            options={THERAPY_MODES}
            defaultValue="Low-Fill"
          />
        </div>

        <div className="mb-4 flex items-center">
          <div className="flex items-center mr-4">
            <Input label="Night Therapy Time" type="text" placeholder="Hours" />
            <span className="text-black ml-2 h-0">Hours</span>
          </div>
          <div className="flex items-center mt-5">
            <Input type="text" placeholder="Minutes" />
            <span className="text-black ml-2">Minutes</span>
          </div>
        </div>

        <p className="text-blue-500 mb-4">
          Range: {minRange} - {maxRange}, in increments of {increment}
        </p>

        <div className="mb-4">
          <DropDownInput
            label="Smart Dwells"
            options={SMART_DWELLS}
            defaultValue="Adjust Dwells Up and Down"
          />
        </div>

        <div className="flex justify-end mt-4">
          <GenericButton
            text="Next"
            className="bg-gray-300 text-black focus:ring-2 focus:ring-black w-[100px]"
          />
        </div>
      </div>

      <div className="flex justify-between items-center mt-4">
        <GenericButton
          text="Cancel"
          className="bg-gray-300 text-black focus:ring-2 focus:ring-black w-[100px]"
        />
      </div>
    </>
  );
};

export default Time;
