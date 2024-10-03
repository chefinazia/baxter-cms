import React from "react";
import LoginButton from "./components/LoginButton";
import CalendarPatientsList from "./components/CalendarPatientsList";
import TableClinical from "./components/TableClinical";
import { columns, data } from "./data/clinicalData";
const App = () => {
  return (
    <div className="divide-y-4">
      <div>
        <LoginButton />
      </div>
      <div>
        <CalendarPatientsList />
      </div>
      <TableClinical columns={columns} data={data} />
    </div>
  );
};

export default App;
