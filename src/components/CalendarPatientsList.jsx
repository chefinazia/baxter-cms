import React, { useState } from "react";
import { addDays, subDays } from "date-fns";
import CalendarTablePatientsList from "./CalendarTablePatientList";
const CalendarPatientsList = () => {
  const [ourDate, setOurDate] = useState(new Date().toLocaleDateString());

  const handleSubtractDate = () => {
    setOurDate(subDays(ourDate, 7).toDateString());
  };
  const handleAddDate = () => {
    setOurDate(addDays(ourDate, 7).toDateString());
  };

  return (
    <div className="grid">
      <div className="col-span-2 flex">
        <div
          className="flex flex-initial align-middle justify-center none border w-auto border-zinc-800 center rounded-lg font-serif text-md text-center uppercase text-zinc-700 py-3"
          data-ripple-dark="true"
        >
          <div className="flex-initial">
            <a onClick={() => handleSubtractDate()}>
              <svg
                className="w-6 h-6 mr-2"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M14 17l-6-5 6-5v10z" fill="#0D0D0D" />
              </svg>
            </a>
          </div>
          <div className="flex-auto">
            <h1>
              {subDays(ourDate, 4).toDateString()} -{" "}
              {addDays(ourDate, 2).toDateString()}
            </h1>
          </div>
          <div className="flex-initial">
            <a onClick={() => handleAddDate()}>
              <svg
                className="w-6 h-6 ml-2"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10 7l6 5-6 5V7z" fill="#0D0D0D" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-initial row-span-2 pt-8 justify-center w-full pr-14">
        <CalendarTablePatientsList leftDate={subDays(ourDate, 4)} />
      </div>
    </div>
  );
};

export default CalendarPatientsList;
