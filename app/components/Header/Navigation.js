"use client";
import React from "react";
import Link from "next/link";

import Hamburger from "./hamburger";

const Navigation = ({ username, navLinks }) => {
  return (
    <>
      <ul className="hidden w-full md:flex justify-between md:justify-start md:gap-4 md:items-center">
        {navLinks.map(({ name, slug, pf }) => {
          if (name === "Sign In") {
            return (
              <Link
                key={crypto.randomUUID()}
                href={slug}
                prefetch={pf}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ml-auto"
              >
                {name}
              </Link>
            );
          } else {
            return (
              <Link
                key={crypto.randomUUID()}
                href={slug}
                prefetch={pf}
                className={name === "Sign Out" ? "ml-auto" : ""}
              >
                {name}
              </Link>
            );
          }
        })}
      </ul>
      <Hamburger navLinks={navLinks} />
    </>
  );
};

export default Navigation;
