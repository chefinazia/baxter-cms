import React from "react";
import CalendarPatientsList from "./components/CalendarPatientsList";
import FilterPatients from "./components/FilterPatients";
import GenericButton from "./components/GenericButton";
import DeviceProgram from "./components/DeviceProgram";
import Search from "./svg/search.svg?react";

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
          <FilterPatients />
        </div>
        <CalendarPatientsList />
        <DeviceProgram />
      </div>
    </div>
  );
};

export default App;
