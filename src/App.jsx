import React from "react";
import CalendarPatientsList from "./components/CalendarPatientsList";
import FilterPatients from "./components/FilterPatients";
import GenericButton from "./components/GenericButton";
import DeviceProgram from "./components/DeviceProgram";
import Search from "./svg/search.svg?react";
import SearchCriteria from "./components/SearchCriteria";
import ClinicalActions from "./components/ClinicalActions";
import PaginatedTable from "./components/PaginatedTable";

const App = () => {
  return (
    <div className="divide-y-4">
      <div>
        <GenericButton
          text="Login"
          className="btn middle rounded-[3px] duration-500 ease-in-out center font-medium text-white text-ellipsis shadow-md transition-all hover:shadow-lg border border-collapse border-x-2 border-y-4 border-green-800"
        />
      </div>

      <div>
        <GenericButton
          icon={<Search />}
          text="Patient Search"
          className="bg-white text-blue-500 border-blue-500 mb-1"
        />
        <div className="mb-2">
          <ClinicalActions />
        </div>
        <div className="mb-2">
          <FilterPatients />
        </div>
        <CalendarPatientsList />
        <DeviceProgram />
        <SearchCriteria />
        <div className="bg-gray-100 py-4">
          <div className="container mx-auto p-4 shadow-lg bg-white">
            <h1 className="text-2xl font-semibold text-gray-700 mb-4">
              Baxter List
            </h1>
            <PaginatedTable />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
