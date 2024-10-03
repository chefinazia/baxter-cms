import { getDay } from "date-fns";
export default function getDayOfWeek(dateString) {
  const dateParts = dateString.split("/");
  const date = new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);

  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const dayOfWeek = daysOfWeek[getDay(date)];
  return dayOfWeek;
}
