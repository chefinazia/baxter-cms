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
        <button
          className="flex divide-x-3 m-auto max-w-fit px-4 justify-center align-middle bg-primary-secondaryTabColor none border border-primary-secondaryTabColorBorderColor center rounded-md font-serif text-md text-center uppercase text-primary-textColor py-3"
        >
          <div className="grid-rows-2 gap-4">
            <a onClick={() => handleSubtractDate()}>
              <svg
                className="w-8 h-8 mr-2"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M14 17l-6-5 6-5v10z" fill="#9fa6a6" />
              </svg>
            </a>
          </div>
          <div className="">
            <h1 className="text-primary-textColor">
              {subDays(ourDate, 4).toDateString()} -{" "}
              {addDays(ourDate, 2).toDateString()}
            </h1>
          </div>
          <div className="">
            <a onClick={() => handleAddDate()}>
              <svg
                className="w-8 h-8 ml-2"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10 7l6 5-6 5V7z" fill="#9fa6a6" />
              </svg>
            </a>
          </div>
        </button>
      <div className="divide-x-8 pt-8 justify-center w-full">
        <CalendarTablePatientsList leftDate={subDays(ourDate, 4)} />
      </div>
    </div>
  );
};

export default CalendarPatientsList;
