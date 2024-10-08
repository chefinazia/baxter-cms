import React from "react";
import { useState } from "react";
import Calendar from "react-calendar";

const CalendarComponent = () => {
  const [value, onChange] = useState(new Date());

  return (
    <div className="grid grid-cols-5 grid-flow-col items-center auto-rows-auto place-content-evenly align-middle justify-center">
      <Calendar
        onChange={onChange}
        value={value}
        defaultView="month"
        calendarType="hebrew"
        maxDetail="month"
        tileClassName={({ activeStartDate, date, view }) => view === 'month' && (date.getDay() === 3 ? "bg-primary-primaryTabColor": "bg-primary-secondaryTabColorBorderColor") && (activeStartDate ===  new Date() ? "bg-primary-primaryTabColor": "bg-primary-secondaryTabColorBorderColor")}
      />
    </div>
  );
};

export default CalendarComponent;
