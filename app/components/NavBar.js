import React from "react";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import Image from "next/image";
import logo from "/public/logo.png";
import NavBarLinks from "./NavBarLinks";
import NavBarUser from "./NavBarUser";

const NavBar = async () => {
  const session = await getServerSession(authOptions);

  return (
    <div className="flex justify-between  bg-slate-200 p-5">
      <div className="flex items-center">
        <Image
          className="mr-5 w-16"
          src={logo}
          href="/"
          alt="TSA logo"
          priority
        ></Image>

        <NavBarLinks session={session} />
      </div>
      <div className="flex items-center">
        <div className="flex items-center divide-x-2 divide-slate-600">
          <NavBarUser session={session} />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
