import React from "react";
import LoginButton from "./components/LoginButton";
import CalendarPatientsList from "./components/CalendarPatientsList";
const App = () => {
  return (
    <div className="flex justify-center">
      <LoginButton />
      <CalendarPatientsList/>
    </div>
  );
};

export default App;
