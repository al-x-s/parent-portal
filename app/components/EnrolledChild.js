"use client";
import Link from "next/link";
import React from "react";
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

const EnrolledChild = ({ name, school, instrument, id }) => {
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
    <Link
      href={`/dashboard/student/${id}`}
      className="shadow-md rounded px-8 py-6 mb-4 w-96 hover:bg-slate-100 hover:cursor-pointer"
    >
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
    </Link>
  );
};

export default EnrolledChild;
