import React, { useState } from "react";
import Time from "./Time";
import Volume from "./Volume";
import Tidal from "./Tidal";
import Settings from "./Settings";
import { DEVICE_PROGRAM_TAPS } from "../constants/mockData";

const DeviceProgram = () => {
  const [activeComponent, setActiveComponent] = useState("Time");

  const renderComponent = () => {
    switch (activeComponent) {
      case "Time":
        return <Time />;
      case "Volume":
        return <Volume />;
      case "Tidal":
        return <Tidal />;
      case "Settings":
        return <Settings />;
      default:
        return <Time />;
    }
  };

  return (
    <div className="p-4">
      <div className="flex space-x-2 mb-0 border border-gray">
        {DEVICE_PROGRAM_TAPS.map((item) => (
          <div
            key={item}
            className="border border-gray p-2 mt-4 ml-4 border-b-transparent rounded"
          >
            <button
              onClick={() => setActiveComponent(item)}
              className="text-black font-bold w-full"
            >
              {item}
            </button>
          </div>
        ))}
      </div>
      <div className="border border-gray p-4 mt-0">{renderComponent()}</div>
    </div>
  );
};

export default DeviceProgram;
