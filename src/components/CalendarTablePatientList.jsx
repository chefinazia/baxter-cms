import React from "react";
import { addDays, getDay, getDate, formatDate } from "date-fns";
import getDayOfWeek from "../../utils/date-fns.js";
const CalendarTablePatientsList = ({ leftDate }) => {
  let dateArr = [leftDate];
  for (let i = 1; i <= 6; i++) {
    dateArr.push(addDays(leftDate, i));
  }
  return (
    <div className="container">
      <table className="text-left w-full border bg-primary-secondaryTabColor">
        <thead className="flex text-primary-textColor w-full">
          <tr className="flex w-full mb-4">
            {dateArr.map((date, index) => {
              return (
                <th key={index} className="p-4 w-1/4 border-separate">
                  {getDayOfWeek(formatDate(date, "dd/MM/yyyy").toString())}
                  {getDate(date)}
                </th>
              );
            })}
          </tr>
        </thead>
      </table>
    </div>
  );
};

export default CalendarTablePatientsList;
