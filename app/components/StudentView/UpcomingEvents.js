import React from "react";
import Image from "next/image";
import calendar from "/public/calendar.png";

const UpcomingEvents = ({ events }) => {
  if (events.length === 0) {
    return (
      <div className="border-dashed w-full border-2 border-indigo-200 mb-2 p-2 flex flex-row justify-start items-center">
        No events currently scheduled for this school
      </div>
    );
  }
  return (
    <>
      {events.map(({ name, day, date, time, location }) => (
        <div
          key={crypto.randomUUID()}
          className="border-dashed w-full border-2 border-indigo-200 mb-2 p-2 flex flex-row justify-start items-center"
        >
          <Image
            className="w-20 m-2 p-2"
            src={calendar}
            alt="trophy icon"
            priority
          ></Image>
          <div className="text-left">
            <h3>{name}</h3>
            <p>
              <span className="font-bold">Date:</span> {day} the {date}
            </p>
            <p>
              <span className="font-bold">Time:</span> {time}
            </p>
            <p>
              <span className="font-bold">Location:</span> {location}
            </p>
          </div>
        </div>
      ))}
    </>
  );
};

export default UpcomingEvents;
