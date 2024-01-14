"use client";
import React from "react";

const Button = ({ children, className, href }) => {
  return (
    <div
      className="text-center max-w-md bg-blue-500 hover:bg-blue-700 text-white p-2 rounded focus:outline-none focus:shadow-outline"
      onClick={() => {
        alert("Disabled in preview");
      }}
    >
      Enrol a Child
    </div>
  );
};

export default Button;
