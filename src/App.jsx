import React from "react";
import LoginButton from "./components/LoginButton";
import CalendarPatientsList from "./components/CalendarPatientsList";
import FilterPatients from "./components/FilterPatients";
import GenericButton from "./components/GenericButton";
import SearchIcon from "@mui/icons-material/Search";

const App = () => {
  return (
    <div className="grid grid-rows-3 grid-flow-col gap-2">
      <div className="row-span-3">
        <GenericButton
          text="Login"
          className="bg-green-700 text-white font-serif text-sm font-medium py-3 px-6 border-x-2 border-y-4 border-green-800 shadow-md focus:ring-green-400"
        />
      </div>
      <div className="col-span-1">
        <GenericButton
          icon={<SearchIcon />}
          text="Patient Search"
          className="bg-white text-blue-500 border-blue-500 mb-2"
        />
        <FilterPatients />
      </div>
      <div className="col-span-2">
        <CalendarPatientsList />
      </div>
    </div>
  );
};

export default App;
