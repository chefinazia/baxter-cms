import React from "react";
import LoginButton from "./components/LoginButton";
import CalendarPatientsList from "./components/CalendarPatientsList";
import TableClinical from "./components/TableClinical";
import { columns, data } from "./data/clinicalData";
import AtomPagination from "./components/AtomPagination";

const App = () => {
  return (
    <div className="divide-y-6">
      <div>
        <LoginButton />
      </div>
      <div>
        <CalendarPatientsList />
      </div>
      <TableClinical columns={columns} data={data} />
      <AtomPagination
        totalCount={100}
        pageSize={5}
        itemPerPage={2}
        onPageChange={(e) => console.log(e)}
      />
    </div>
  );
};

export default App;
