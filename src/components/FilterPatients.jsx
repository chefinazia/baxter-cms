import React from "react";
import DropDownInput from "./DropDownInput";
import GenericButton from "./GenericButton";
import { DATE_OPTIONS, MODALITY_OPTIONS, PHYSICIANS, PROGRESS_OPTIONS } from "../constants/mockData";

const FilterPatients = () => {

  return (
    <div className="border border-black">
      <div className="bg-blue-500 py-2 px-4 mb-4">
        <div className="text-white text-lg font-normal">Filter Patients</div>
      </div>
      <div className="flex flex-row space-x-6 mb-4 ml-8">
        <DropDownInput label="Attending Physician" options={PHYSICIANS} />
        <DropDownInput label="Treatment Progress" options={PROGRESS_OPTIONS} />
        <DropDownInput label="Filter By Date" options={DATE_OPTIONS} />
        <GenericButton
          text="Filter"
          className="bg-gray-300 text-black ml-8 mt-8 h-10 focus:ring-2 focus:ring-black font-semibold w-48"
        />
      </div>
      <div className="flex flex-row mb-4 ml-8">
        <DropDownInput label="Modality/Device" options={MODALITY_OPTIONS} />
      </div>
    </div>
  );
};

export default FilterPatients;
