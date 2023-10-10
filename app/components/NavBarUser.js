import React from "react";
import NavBarSignIn from "./NavBarSignIn";
import NavBarSignOut from "./NavBarSignOut";

const NavBarUser = ({ session }) => {
  return (
    <>
      {!session && <NavBarSignIn />}
      {session && <NavBarSignOut />}
    </>
  );
};

export default NavBarUser;
