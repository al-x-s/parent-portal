import React from "react";
import Link from "next/link";
import Image from "next/image";
import user from "/public/user.png";

const NavBarSignOut = () => {
  return (
    <>
      <div className="flex items-center">
        <Image className="w-8 mr-5" src={user} alt="user icon"></Image>
        <Link href="/profile" className="mr-5">
          Profile
        </Link>
      </div>

      <Link href="/api/auth/signout" className="pl-5 pr-5">
        Sign out
      </Link>
    </>
  );
};

export default NavBarSignOut;
