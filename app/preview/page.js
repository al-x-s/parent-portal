import React from "react";
import CurrentEnrolments from "../components/CurrentEnrolments";
import Greeting from "../components/Greeting";

const Preview = () => {
  const name = "Visitor";

  const students = [
    {
      id: "clrd1hm390000p4mhfhluz9cs",
      firstName: "Bluey",
      lastName: "Heeler",
      school: {
        name: "Waldorf",
      },
      instrument: "Piano",
    },
    {
      id: "clrd1iwxg0001p4mhd5nckitt",
      firstName: "Bingo",
      lastName: "Heeler",
      school: {
        name: "Waldorf",
      },
      instrument: "Percussion",
    },
  ];

  return (
    <main className="p-5 flex justify-center">
      <div className="flex flex-col items-center justify-center">
        <Greeting name={name} />
        <CurrentEnrolments students={students} disabled="true" />
      </div>
    </main>
  );
};

export default Preview;
