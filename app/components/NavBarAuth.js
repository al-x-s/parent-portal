import React from "react";
import Link from "next/link";

const NavBarAuth = () => {
  return (
    <>
      <Link href="/dashboard" className="mr-5">
        Home
      </Link>

      <Link href="/hire" className="mr-5">
        Instrument Hire
      </Link>

      <Link href="/accessories" className="mr-5">
        Accessories
      </Link>

      <Link href="/payments" className="mr-5">
        Payments
      </Link>

      <Link href="/help" className="">
        Get Help
      </Link>
    </>
  );
};

export default NavBarAuth;
