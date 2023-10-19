import React from "react";
import ProgressWheel from "./ProgressWheel";
import Image from "next/image";
import trophy1 from "/public/trophies/01.png";
import trophy2 from "/public/trophies/02.png";
import trophy3 from "/public/trophies/03.png";
import trophy4 from "/public/trophies/04.png";
import trophy5 from "/public/trophies/05.png";
import calendar from "/public/calendar.png";
import Button from "../Button";

import flute from "/public/instruments/flute.png";
import oboe from "/public/instruments/oboe.png";
import clarinet from "/public/instruments/clarinet.png";
import trumpet from "/public/instruments/trumpet.png";
import saxophone from "/public/instruments/saxophone.png";
import frenchHorn from "/public/instruments/french-horn.png";
import trombone from "/public/instruments/trombone.png";
import baritoneTuba from "/public/instruments/baritone-tuba.png";
import bassGuitar from "/public/instruments/bass-guitar.png";
import percussion from "/public/instruments/percussion.png";
import piano from "/public/instruments/piano.png";

const StudentView = ({ student }) => {
  const BOOK_PROGRESS_PERCENT = Math.floor(
    (student.currentSong / student.currentBook.numSongs) * 100
  );

  const trophies = [
    { name: "Completed Accent on Achievement Book 1", image: trophy1 },
    { name: "My First Concert", image: trophy3 },
    { name: "Completed Accent on Achievement Book 2", image: trophy2 },
  ];

  const events = [
    {
      name: "Carols Night",
      day: "Saturday",
      date: "9th December 2023",
      time: "7:30pm",
      location: "School Hall",
    },
    {
      name: "Demo Concert",
      day: "Monday",
      date: "24th November 2023",
      time: "11:30am",
      location: "Learning Hub",
    },
  ];

  const instrument = student.instrument;
  let instrumentImage;
  switch (instrument) {
    case "Flute":
      instrumentImage = flute;
      break;
    case "Oboe":
      instrumentImage = oboe;
      break;
    case "Clarinet":
      instrumentImage = clarinet;
      break;
    case "Alto Saxophone" || "Tenor Saxophone" || "Baritone Saxophone":
      instrumentImage = saxophone;
      break;
    case "Trumpet":
      instrumentImage = trumpet;
      break;
    case "French Horn":
      instrumentImage = frenchHorn;
      break;
    case "Trombone":
      instrumentImage = trombone;
      break;
    case "Baritone Horn" || "Tuba":
      instrumentImage = baritoneTuba;
      break;
    case "Bass Guitar":
      instrumentImage = bassGuitar;
      break;
    case "Percussion":
      instrumentImage = percussion;
      break;
    case "Piano":
      instrumentImage = piano;
      break;
  }

  return (
    <>
      <h1 className="text-3xl text font-bold text">
        {student.firstName} {student.lastName}
      </h1>
      <div className="flex gap-2 flex-col md:flex-row flex-wrap justify-center items-center mt-2">
        {/* STUDENT NAME AND PROGRESS WHEEL */}
        <div className="text-center flex flex-col justify-center items-center gap-4 bg-[#e3edf7] text-[#555] mb-2 w-11/12 md:w-5/12 pt-8 pb-8 rounded-xl shadow-md">
          <h2 className="text-xl mx-2 font-semibold">Method Book Progress</h2>
          <ProgressWheel percentage={BOOK_PROGRESS_PERCENT} />
          <p className="mx-2">{student.currentBook.name}</p>
        </div>
        {/* UPCOMING EVENTS */}
        <div className="text-center bg-[#e3edf7] text-[#555] mb-2 w-11/12 md:w-5/12 p-8 rounded-xl shadow-md text-sm">
          <h2 className="text-xl mb-2 font-semibold">Upcoming Events</h2>
          {events.map(({ name, day, date, time, location }, index) => (
            <div className="border-dashed w-full border-2 border-indigo-200 mb-2 p-2 flex flex-row justify-start items-center">
              <Image
                className="w-20 m-2 p-2"
                src={calendar}
                alt="trophy icon"
                priority
                key={index}
              ></Image>
              <div className="text-left">
                <h3>{name}</h3>
                <p>
                  <span className="font-bold">Date:</span> {day} the {date}
                </p>
                <p>
                  <span className="font-bold">Location:</span> {location}
                </p>
              </div>
            </div>
          ))}
        </div>
        {/* STUDENT TROPHIES AND ACHIEVEMENTS */}
        <div className="text-center bg-[#e3edf7] text-[#555] mb-2 w-11/12 md:w-5/12 p-8 rounded-xl shadow-md">
          <h2 className="text-xl mb-2 font-semibold">Trophies</h2>
          <div className="flex flex-row gap-2 flex-wrap justify-center">
            {trophies.map(({ name, image }, index) => (
              <div className="border-dashed w-full border-2 border-indigo-200 mb-2 p-2 inline-flex items-center">
                <Image
                  className="w-20 m-2 p-2"
                  src={image}
                  alt="trophy icon"
                  priority
                  key={index}
                ></Image>
                <p className="text-sm hover:block text-center ml-auto w-full">
                  {name}
                </p>
              </div>
            ))}
          </div>
          {/* TODO: Need to create a student trophies */}
        </div>

        {/* INSTRUMENT MANAGEMENT */}
        <div className="text-center bg-[#e3edf7] text-[#555] mb-2 w-11/12 md:w-5/12 p-8 rounded-xl shadow-md flex flex-col justify-center items-center">
          <h2 className="text-xl mx-2 font-semibold">Instrument Management</h2>
          <Image
            className="w-20 m-2 p-2"
            src={instrumentImage}
            alt={instrument}
            priority
          ></Image>
          <Button
            children="Request Service"
            className="text-center bg-indigo-500 hover:bg-indigo-700 text-white font-bold text-sm p-2 rounded focus:outline-none focus:shadow-outline mx-8"
            href=""
          />
        </div>
      </div>
    </>
  );
};

export default StudentView;
