import React, { useState } from "react";
import { addDays, subDays } from "date-fns";
import CalendarTablePatientsList from "./CalendarTablePatientList";
import CaretLeft from "../svg/caret-left.svg?react";
import CaretRight from "../svg/caret-right.svg?react";
import { Link } from "react-router-dom";
const CalendarPatientsList = () => {
  const [ourDate, setOurDate] = useState(new Date().toLocaleDateString());

  const handleSubtractDate = () => {
    setOurDate(subDays(ourDate, 7).toDateString());
  };
  const handleAddDate = () => {
    setOurDate(addDays(ourDate, 7).toDateString());
  };

  return (
    <div className="grid grid-rows-2 gap-4 grid-flow-col">
        <div
          className="grid grid-cols-4 gap-4 grid-flow-dense items-center justify-start w-[600px] h-[100px] m-auto text-nowrap  bg-primary-secondaryTabColor border border-primary-secondaryTabColorBorderColor rounded-md font-serif text-sm uppercase text-primary-textColor"
        >
          <div className="w-8 h-8 ml-2">
            <Link onClick={() => handleSubtractDate()}>
              <CaretLeft/>
            </Link>
          </div>
          <div>
            <h1 className="text-primary-textColor">
              {subDays(ourDate, 4).toDateString()} -{" "}
              {addDays(ourDate, 2).toDateString()}
            </h1>
          </div>
          <div className="w-8 h-8 absolute right-96">
            <Link onClick={() => handleAddDate()}>
              <CaretRight/>
            </Link>
          </div>
        </div>
      <div className="divide-x-8 pt-8 justify-center w-full">
        <CalendarTablePatientsList leftDate={subDays(ourDate, 4)} />
      </div>
    </div>
  );
};

export default CalendarPatientsList;
