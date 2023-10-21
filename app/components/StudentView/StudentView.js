import React from "react";
import ProgressWheel from "./ProgressWheel";
import UpcomingEvents from "./UpcomingEvents";
import Trophies from "./Trophies";
import InstrumentOptions from "./InstrumentOptions";

const StudentView = ({ student }) => {
  const BOOK_PROGRESS_PERCENT = Math.floor(
    (student.currentSong / student.currentBook.numSongs) * 100
  );

  return (
    <>
      {/* STUDENT NAME */}
      <h1 className="text-3xl text font-bold text">
        {student.firstName} {student.lastName}
      </h1>
      <div className="flex gap-2 flex-col md:flex-row flex-wrap justify-center items-center mt-2 md:items-stretch">
        {/* PROGRESS WHEEL */}
        <div className="text-center flex flex-col justify-center items-center gap-4 bg-[#e3edf7] text-[#555] w-11/12 md:w-5/12 md:justify-between pt-8 pb-8 rounded-xl shadow-md">
          <h2 className="text-xl mx-2 font-semibold">Method Book Progress</h2>
          <ProgressWheel percentage={BOOK_PROGRESS_PERCENT} />
          <p className="mx-2">{student.currentBook.name}</p>
        </div>

        {/* INSTRUMENT MANAGEMENT */}
        <div className="text-center bg-[#e3edf7] text-[#555] w-11/12 md:w-5/12 p-8 rounded-xl shadow-md flex flex-col justify-center items-center md:justify-between">
          <h2 className="text-xl mx-2 font-semibold">Instrument Management</h2>
          <InstrumentOptions instrument={student.instrument} />
        </div>

        {/* UPCOMING EVENTS */}
        <div className="text-center bg-[#e3edf7] text-[#555] mb-2 w-11/12 md:w-5/12 p-8 rounded-xl shadow-md text-sm">
          <h2 className="text-xl mb-2 font-semibold">Upcoming Events</h2>
          <UpcomingEvents events={student.school.events} />
        </div>

        {/* STUDENT TROPHIES AND ACHIEVEMENTS */}
        <div className="text-center bg-[#e3edf7] text-[#555] mb-2 w-11/12 md:w-5/12 p-8 rounded-xl shadow-md">
          <h2 className="text-xl mb-2 font-semibold">Trophies</h2>
          <div className="flex flex-row gap-2 flex-wrap justify-center">
            <Trophies trophies={student.trophies} />
          </div>
        </div>
      </div>
    </>
  );
};

export default StudentView;
