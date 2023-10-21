import React from "react";
import Button from "../Button";
import Image from "next/image";

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

const InstrumentOptions = ({ instrument }) => {
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
    case "Alto Saxophone":
    case "Tenor Saxophone":
    case "Baritone Saxophone":
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
    case "Baritone Horn":
    case "Tuba":
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
      <Image
        className="w-20 m-2 p-2 md:w-32"
        src={instrumentImage}
        alt={instrument}
        priority
      ></Image>
      <Button
        children="Request Service"
        className="text-center bg-indigo-500 hover:bg-indigo-700 text-white font-bold text-sm p-2 rounded focus:outline-none focus:shadow-outline mx-8"
        href=""
      />
    </>
  );
};

export default InstrumentOptions;
