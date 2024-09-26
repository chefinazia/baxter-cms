import React from "react";
import GenericButton from "./GenericButton";
import Input from "./Input"; 

const Time = () => {
  const therapyModes = ["Low-Fill", "High-Fill"];
  const smartDwells = ["Adjust Dwells Up and Down", "Adjust Dwells Up Only"];

  return (
    <>
      <div className="border-b-2 p-4 bg-white -ml-4 -mr-4">
        <div className="bg-blue-500 text-white py-2 px-4 mb-4 -mt-8 -mx-4 h-9"></div>
        <div className="mb-4">
          <Input
            label="Device Program Name"
            isInput={true}
            placeholder="Enter name"
          />
        </div>

        <div className="mb-4">
          <Input
            label="Therapy Mode"
            options={therapyModes}
            defaultValue="Low-Fill"
          />
        </div>

        <div className="mb-4 flex items-center">
          <div className="flex items-center mr-4">
            <Input
              label="Night Therapy Time"
              isInput={true}
              placeholder="Hours"
            />
            <span className="text-black ml-2 h-0">Hours</span>
          </div>
          <div className="flex items-center mt-5">
            <Input isInput={true} placeholder="Minutes" />
            <span className="text-black ml-2">Minutes</span>
          </div>
        </div>

        <p className="text-blue-500 mb-4">
          Range: 0:10 - 48:00, in increments of 0:10
        </p>

        <div className="mb-4">
          <Input
            label="Smart Dwells"
            options={smartDwells}
            defaultValue="Adjust Dwells Up and Down"
          />
        </div>

        {/* Footer with Buttons */}
        <div className="flex justify-end mt-4">
          <GenericButton
            text="Next"
            className="bg-gray-300 text-black focus:ring-2 focus:ring-black"
            style={{ width: "100px" }}
          />
        </div>
      </div>

      {/* Cancel and Next with Divider */}
      <div className="flex justify-between items-center mt-4">
        <GenericButton
          text="Cancel"
          className="bg-gray-300 text-black focus:ring-2 focus:ring-black"
          style={{ width: "100px" }}
        />

       
      </div>
    </>
  );
};

export default Time;
