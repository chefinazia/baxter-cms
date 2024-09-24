import React from "react";
import LoginButton from "./components/LoginButton";
import CalendarPatientsList from "./components/CalendarPatientsList";
const App = () => {
  return (
    <div className="grid grid-rows-3 grid-flow-col gap-4">
      <div className="row-span-3">
        <LoginButton />
      </div>
      <div className="col-span-2">
        <CalendarPatientsList />
      </div>
    </div>
  );
};

export default App;
