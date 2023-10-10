import React from "react";
import Image from "next/image";
import clarinet from "/public/clarinet.png";
import piano from "/public/piano.png";
import saxophone from "/public/saxophone.png";

const EnrolledChild = ({ name, school, instrument }) => {
  let instrumentImage;
  switch (instrument) {
    case "Clarinet":
      instrumentImage = clarinet;
      break;
    case "Piano":
      instrumentImage = piano;
      break;
    case "Saxophone":
      instrumentImage = saxophone;
      break;
  }
  console.log(instrumentImage);

  return (
    <article className="shadow-md rounded px-8 pt-6 pb-8 mb-4 w-96 hover:bg-slate-100 hover:cursor-pointer">
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
