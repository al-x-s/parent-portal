import React from "react";
import Image from "next/image";
import flute from "/public/flute.png";
import oboe from "/public/oboe.png";
import clarinet from "/public/clarinet.png";
import trumpet from "/public/trumpet.png";
import saxophone from "/public/saxophone.png";
import frenchHorn from "/public/french-horn.png";
import trombone from "/public/trombone.png";
import baritoneTuba from "/public/baritone-tuba.png";
import bassGuitar from "/public/bass-guitar.png";
import percussion from "/public/percussion.png";
import piano from "/public/piano.png";

const EnrolledChild = ({ name, school, instrument }) => {
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
    <article className="shadow-md rounded px-8 py-6 mb-4 w-96 hover:bg-slate-100 hover:cursor-pointer">
      <div className="flex">
        <Image
          className="mr-5 w-16"
          src={instrumentImage}
          href="/"
          alt={instrument}
          priority
        ></Image>
        <div>
          <h2>{name}</h2>
          <p>{school}</p>
          <p>{instrument}</p>
        </div>
      </div>
    </article>
  );
};

export default EnrolledChild;
