import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const FlagSVG = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="Navigation / Flag">
      <path
        id="Vector"
        d="M4 15.6871C9.81818 11.1377 14.1818 20.2363 20 15.6869V4.31347C14.1818 8.86284 9.81818 -0.236103 4 4.31327V15.6871Z"
        stroke="#FFD700"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="#FFD700"
      />
      <text x="9" y="12" fill="black" fontSize="10" fontWeight="bold">
        !
      </text>
    </g>
  </svg>
);

const CurrentDateSVG = () => (
  <svg
    width="15px"
    height="15px"
    viewBox="0 0 256 256"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    preserveAspectRatio="xMidYMid"
  >
    <defs>
      <style>
        {`
          .cls-3 { fill: #0bdefe; }
          .cls-4 { fill: #2ed8ec; }
          .cls-5 { fill: #2ee1ec; }
          .cls-6 { fill: #2bebf1; }
          .cls-7 { fill: #50eff5; }
          .cls-8 { fill: #4ef4fa; }
          .cls-9 { fill: #82f4f8; }
        `}
      </style>
    </defs>
    <g id="ball">
      <path
        d="M128.000,1.000 C198.692,1.000 256.000,57.308 256.000,128.000 C256.000,198.692 198.692,256.000 128.000,256.000 C57.308,256.000 -0.000,198.692 -0.000,128.000 C-0.000,57.308 57.308,1.000 128.000,1.000 Z"
        id="path-1"
        className="cls-3"
        fillRule="evenodd"
      />
      <ellipse
        id="ellipse-1"
        className="cls-4"
        cx="128"
        cy="132"
        rx="128"
        ry="108"
      />
      <ellipse
        id="ellipse-2"
        className="cls-5"
        cx="128"
        cy="114"
        rx="126"
        ry="97"
      />
      <path
        d="M247.000,92.000 C247.000,136.183 193.722,172.000 128.000,172.000 C62.278,172.000 9.000,136.183 9.000,92.000 C9.000,86.079 9.985,80.131 11.801,74.266 C21.950,52.355 38.111,33.801 58.170,20.717 C77.786,9.240 101.904,2.000 128.000,2.000 C154.096,2.000 178.213,9.240 197.829,20.717 C217.889,33.801 234.050,52.355 244.199,74.266 C246.014,80.131 247.000,86.079 247.000,92.000 Z"
        id="path-2"
        className="cls-6"
        fillRule="evenodd"
      />
      <path
        d="M128.000,129.000 C72.771,129.000 28.000,100.346 28.000,65.000 C28.000,55.597 31.194,46.464 36.885,38.111 C60.095,14.586 92.342,-0.000 128.000,-0.000 C163.658,-0.000 195.905,14.586 219.115,38.111 C224.806,46.464 228.000,55.597 228.000,65.000 C228.000,100.346 183.228,129.000 128.000,129.000 Z"
        id="path-3"
        className="cls-7"
        fillRule="evenodd"
      />
      <ellipse
        id="ellipse-3"
        className="cls-8"
        cx="128"
        cy="48"
        rx="74"
        ry="47"
      />
      <ellipse
        id="ellipse-4"
        className="cls-9"
        cx="128"
        cy="29"
        rx="46"
        ry="29"
      />
    </g>
  </svg>
);

const CalendarComponent = () => {
  const [date, setDate] = useState(new Date());
  const [activeStartDate, setActiveStartDate] = useState(new Date());
  const [events, setEvents] = useState({});

  const handleDayClick = (value) => {
    if (value < new Date()) {
      alert("You can't select a previous date.");
      return;
    }
    const selectedDate = value.toDateString();
    const content = prompt("Enter content for this date:", "");
    if (content) {
      setEvents((prevEvents) => ({
        ...prevEvents,
        [selectedDate]: content,
      }));
    }
    setDate(value);
  };

  const tileClassName = ({ date }) => {
    const today = new Date().toDateString();
    const dateString = date.toDateString();

    return dateString === today
      ? "react-calendar__tile react-calendar__tile--current react-calendar__navigation react-calendar__month-view__weekdays react-calendar__month-view__days__day--neighboringMonth react-calendar__month-view__weekNumbers react-calendar__navigation__arrow react-calendar__month-view__weekdays__weekday text-gray-500 text-left"
      : "react-calendar__tile react-calendar__navigation react-calendar__month-view__weekdays react-calendar__month-view__days__day--neighboringMonth react-calendar__month-view__weekNumbers react-calendar__navigation__arrow react-calendar__month-view__weekdays__weekday text-gray-500 text-left";
  };
  
  const tileContent = ({ date }) => {
    const dateString = date.toDateString();
    const today = new Date().toDateString();

    return (
      <div className = "flex items-center justify-center">
        {dateString === today ? (
          <CurrentDateSVG />
        ) : events[dateString] ? (
          <FlagSVG />
        ) : (
          <span>--</span>
        )}
      </div>
    );
  };

  const changeMonth = (direction) => {
    const newDate = new Date(activeStartDate);
    newDate.setMonth(activeStartDate.getMonth() + direction);
    setActiveStartDate(newDate);
  };

  return (
    <div>
      <div className="flex justify-between items-center bg-blue-500 p-4 text-white">
        <button onClick={() => changeMonth(-1)} className="hover:underline">
          &lt;
        </button>
        <h2 className="text-lg font-semibold">
          {activeStartDate.toLocaleString("default", {
            month: "long",
            year: "numeric",
          })}
        </h2>
        <button onClick={() => changeMonth(1)} className="hover:underline">
          &gt;
        </button>
      </div>
      <Calendar
        onClickDay={handleDayClick}
        tileContent={tileContent}
        onChange={setDate}
        value={date}
        view="month"
        calendarType="iso8601"
        tileClassName={tileClassName}
        activeStartDate={activeStartDate}
        onActiveStartDateChange={({ activeStartDate }) =>
          setActiveStartDate(activeStartDate)
        }
        tileDisabled={({ date }) =>
          date.getMonth() < new Date().getMonth() ||
          date.getMonth() > new Date().getMonth()
        }
        nextLabel={null}
        prevLabel={null}
        showNavigation={false}
      />
    </div>
  );
};

export default CalendarComponent;