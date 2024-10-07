import React from "react";
import DropDownInput from "./DropDownInput";
import GenericButton from "./GenericButton";
import { PATIENT_STATUS } from "../constants/mockData";
import Input from "./Input";

const SearchCriteria = () => {
  return (
    <div className="border border-gray-50 w-[65%]">
      <div className="bg-blue-500 py-2 px-4 mb-4">
        <div className="text-white text-lg font-normal">Search Criteria</div>
      </div>
      <div className="flex flex-wrap items-end space-x-6 mb-4 ml-8 justify-between mr-3">
        <div className="flex space-x-6">
          <Input
            label="Patient Search"
            className="w-96"
            type="text"
            placeholder="Patient Name"
          />
          <DropDownInput
            label="Patient Status"
            options={PATIENT_STATUS}
            className="w-96"
          />
        </div>
        <GenericButton
          text="Search"
          className="bg-gray-300 text-black h-10 focus:ring-2 focus:ring-black font-semibold w-48"
        />
      </div>
    </div>
  );
};

export default SearchCriteria;
