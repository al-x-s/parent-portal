import React from "react";
import Link from "next/link";

const NavBarSignIn = () => {
  return (
    <>
      <Link
        href="user/signup"
        className="pl-5 pr-5 mr-5 bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Create an Account
      </Link>
      <Link href="/api/auth/signin" className="pl-5 pr-5">
        Sign In
      </Link>
    </>
  );
};

export default NavBarSignIn;
