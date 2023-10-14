import React from "react";
import { getServerSession } from "next-auth";
import { authOptions } from "../../api/auth/[...nextauth]/route";

import Image from "next/image";
import logo from "/public/logo.png";

import Navigation from "./Navigation";

const Header = async () => {
  const session = await getServerSession(authOptions);

  const authLinks = [
    { name: "Home", slug: "/dashboard" },
    { name: "Instrument Hire", slug: "/hire" },
    { name: "Accessories", slug: "/accessories" },
    { name: "Payments", slug: "/payments" },
    { name: "Get Help", slug: "/help" },
    { name: "Sign Out", slug: "/api/auth/signout" },
  ];

  const unAuthLinks = [
    { name: "Home", slug: "/" },
    { name: "Contact", slug: "/help" },
    { name: "Sign In", slug: "/api/auth/signin" },
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
    <header className="z-20 flex justify-between  bg-slate-200 p-5 ">
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
