import React from "react";
import Image from "next/image";

import trophy1 from "/public/trophies/01.png";
import trophy2 from "/public/trophies/02.png";
import trophy3 from "/public/trophies/03.png";
import trophy4 from "/public/trophies/04.png";
import trophy5 from "/public/trophies/05.png";

const Trophies = ({ trophies }) => {
  if (trophies.length === 0) {
    return (
      <div className="border-dashed w-full border-2 border-indigo-200 mb-2 p-2 inline-flex items-center">
        <p className="text-sm hover:block text-center ml-auto w-full">
          No trophies yet, but watch this space!
        </p>
      </div>
    );
  }

  return (
    <>
      {trophies.map(({ name, image }) => {
        let trophyImage;
        switch (image) {
          case "trophy1":
            trophyImage = trophy1;
            break;
          case "trophy2":
            trophyImage = trophy2;
            break;
          case "trophy3":
            trophyImage = trophy3;
            break;
          case "trophy4":
            trophyImage = trophy4;
            break;
          case "trophy5":
            trophyImage = trophy5;
            break;
        }
        return (
          <div
            key={crypto.randomUUID()}
            className="border-dashed w-full border-2 border-indigo-200 mb-2 p-2 inline-flex items-center"
          >
            <Image
              className="w-20 m-2 p-2"
              src={trophyImage}
              alt="trophy icon"
              priority
            ></Image>
            <p className="text-sm hover:block text-center ml-auto w-full">
              {name}
            </p>
          </div>
        );
      })}
    </>
  );
};

export default Trophies;
