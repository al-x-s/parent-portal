import React from "react";
import { getServerSession } from "next-auth";
import { authOptions } from "../../api/auth/[...nextauth]/route";

import Image from "next/image";
import logo from "/public/logo.png";

import Navigation from "./Navigation";

const Header = async () => {
  const session = await getServerSession(authOptions);

  const authLinks = [
    { name: "Home", slug: "/dashboard", pf: true },
    { name: "Instrument Hire", slug: "/wip", pf: true },
    { name: "Accessories", slug: "/wip", pf: true },
    { name: "Payments", slug: "/wip", pf: true },
    { name: "Get Help", slug: "/wip", pf: true },
    { name: "Sign Out", slug: "/api/auth/signout", pf: false },
  ];

  const unAuthLinks = [
    { name: "Home", slug: "/", pf: true },
    { name: "Preview App", slug: "/preview", pf: true },
    { name: "Sign In", slug: "/api/auth/signin", pf: false },
  ];

  let navLinks;
  let username;
  if (session) {
    navLinks = authLinks;
    username = session.user.name;
  } else {
    navLinks = unAuthLinks;
    username = "";
  }

  return (
    <header className="z-20 flex justify-center  bg-slate-200 p-5 ">
      <div className="flex w-screen max-w-7xl items-center justify-between">
        <Image
          className="mr-5 w-16"
          src={logo}
          href="/"
          alt="TSA logo"
          priority
        ></Image>
        <Navigation username={username} navLinks={navLinks} />
      </div>
    </header>
  );
};

export default Header;
