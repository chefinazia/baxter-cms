import React from "react";
import Calendar from "react-calendar";
const CalendarComponent = (setDate, date, selectRange) => {
    const disablePreviousNextMonthDates = ({date, view}) => {
        if(view === 'month'){
            const now = new Date();
            return (
               date.getMonth() > now.getMonth() || date.getMonth() < now.getMonth() || (date.getMonth() === 11 && now.getMonth() ===0) || date.getFullYear() < now.getFullYear()
            )
        }
        return false;
    }
  return (
      <Calendar
        onChange={setDate}
        value={date}
        view="month"
        calendarType="iso8601"
        selectRange={selectRange}
        tileClassName="border button react-calendar__navigation  react-calendar__month-view__weekdays react-calendar__month-view__days__day--neighboringMonth react-calendar__month-view__weekNumbers react-calendar__tile react-calendar__navigation__arrow  react-calendar__month-view__weekdays__weekday"
        activeStartDate={new Date()}
        tileDisabled={disablePreviousNextMonthDates}
      />
  );
};

export default CalendarComponent;