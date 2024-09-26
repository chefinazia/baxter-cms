import React from "react";
import Input from "./Input";
import GenericButton from "./GenericButton";

const FilterPatients = () => {
  const physicians = ["All", "Senior Dr.", "Junior Dr.", "Staff Dr."];
  const progressOptions = ["All", "In Progress", "Completed", "Pending"];
  const dateOptions = ["All", "Last 7 Days", "Last 15 Days", "This Month"];
  const modalityOptions = ["All", "MRI", "CT Scan", "X-Ray"];

  return (
    <div className="border border-black">
      <div className="bg-blue-500 py-2 px-4 mb-4">
        <div className="text-white text-lg font-normal">Filter Patients</div>
      </div>
      <div className="flex flex-row space-x-6 mb-4 ml-4">
        <Input label="Attending Physician" options={physicians} />
        <Input label="Treatment Progress" options={progressOptions} />
        <Input label="Filter By Date" options={dateOptions} />
        <GenericButton
          text="Filter"
          className="bg-gray-300 text-black mt-8 h-10 focus:ring-2 focus:ring-black font-semibold w-48"
        />
      </div>
      <div className="flex flex-row mb-4 ml-4">
        <Input label="Modality/Device" options={modalityOptions} />
      </div>
    </div>
  );
};

export default FilterPatients;
