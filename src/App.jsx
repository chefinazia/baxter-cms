// import React from "react";
// import LoginButton from "./components/LoginButton";
// import CalendarPatientsList from "./components/CalendarPatientsList";
// import LoginForm from "./components/loginForm/LoginForm";
// const App = () => {
//   return (
//     <div className="flex flex-col justify-center items-center">
//       <div className="flex flex-col items-center">
//         <div className="flex justify-between items-center w-full max-w-md mb-8">
//           <LoginButton />
//           <CalendarPatientsList />
//         </div>
//         <LoginForm />
//       </div>
//     </div>
//   );
// };

// export default App;

import React, { useState } from "react";
import LoginButton from "./components/LoginButton";
import CalendarPatientsList from "./components/CalendarPatientsList";
import LoginForm from "./components/loginForm/LoginForm";

const App = () => {
  const [showLoginForm, setShowLoginForm] = useState(false);

  // Toggle the visibility of the LoginForm when the button is clicked
  const handleLoginClick = () => {
    setShowLoginForm(true); // Show the login form when button is clicked
  };

  return (
    <div className="grid grid-rows-3 grid-flow-col gap-4">
      <div className="row-span-3">
        <LoginButton onClick={handleLoginClick} />
      </div>
      <div className="col-span-2">
        <CalendarPatientsList />
      </div>
      {showLoginForm && <LoginForm />}
    </div>
  );
};

export default App;
