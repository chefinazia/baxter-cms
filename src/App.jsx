import React from "react";
import LoginButton from "./components/LoginButton";
import CalendarPatientsList from "./components/CalendarPatientsList";
import LoginForm from "./components/loginForm/LoginForm";

const App = () => {
  return (
    <div className="grid grid-rows-3 grid-flow-col gap-4">
      <div className="row-span-3">
        <LoginButton />
      </div>
      <div className="col-span-2">
        <CalendarPatientsList />
      </div>
      {/* <LoginForm/> */}
    </div>
  );
};

export default App;
