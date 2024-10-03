import React from "react";
import Calendar from "../svg/calendar.svg?react";
import BackArrow from "../svg/backArrow.svg?react";
import Camera from "../svg/camera.svg?react";
import Filter from "../svg/filter.svg?react";

const ClinicalActions = () => {
  return (
    <div className="w-40 bg-gray-100 border border-gray-100">
      <div className="font-semibold bg-gray-300 pl-4">Actions</div>
      <div className="flex items-center space-x-2 cursor-pointer border-b border-gray-300 p-2">
        <BackArrow />
        <span className="text-black font-medium">Return to Dashboard</span>
      </div>
      <div className="flex items-center space-x-2 cursor-pointer border-b border-gray-300 p-2">
        <Camera />
        <span className="text-black font-medium">Claria Patient Snapshot</span>
      </div>
      <div className="flex items-center space-x-2 cursor-pointer border-b border-gray-300 p-2">
        <Calendar />
        <span className="text-black font-medium">Claria Treatment Summary</span>
      </div>
      <div className="flex items-center space-x-2 cursor-pointer p-2">
        <Filter />
        <span className="text-black font-medium">Claria Device Settings</span>
      </div>
    </div>
  );
};

export default ClinicalActions;
