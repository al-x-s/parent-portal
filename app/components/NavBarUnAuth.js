import React from "react";
import Link from "next/link";

const NavBarUnAuth = () => {
  return (
    <>
      <Link href="/" className="mr-5">
        Home
      </Link>

      <Link href="/help" className="">
        Get Help
      </Link>
    </>
  );
};

export default NavBarUnAuth;
