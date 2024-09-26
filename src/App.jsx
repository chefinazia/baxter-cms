import React from "react";
import LoginButton from "./components/LoginButton";
import CalendarPatientsList from "./components/CalendarPatientsList";
const App = () => {
  return (
    <div className="divide-y-4">
      <div>
        <LoginButton />
      </div>
      <div>
        <CalendarPatientsList />
      </div>
    </div>
  );
};

export default App;
