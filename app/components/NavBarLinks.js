import React from "react";

import NavBarAuth from "./NavBarAuth";
import NavBarUnAuth from "./NavBarUnAuth";

const NavBarLinks = ({ session }) => {
  return (
    <>
      {session && <NavBarAuth />}
      {!session && <NavBarUnAuth />}
    </>
  );
};

export default NavBarLinks;
