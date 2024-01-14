import React from "react";
import Image from "next/image";
import construction from "/public/website-maintenance.svg";

const Wip = () => {
  return (
    <main className="p-5 flex justify-center">
      <div className="flex flex-col items-center justify-center">
        <Image
          // className="w-100"
          src={construction}
          alt="Wesite Under Construction"
          priority
        ></Image>
        <h1 className="pb-2 text-xl text-slate-500 font-bold text-center">
          Coming Soon - Check Back Later!
        </h1>
      </div>
    </main>
  );
};

export default Wip;
