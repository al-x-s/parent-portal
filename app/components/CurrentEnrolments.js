import React from "react";
import EnrolledChild from "./EnrolledChild";
import Link from "next/link";
import { redirect } from "next/navigation";

const CurrentEnrolments = ({ students }) => {
  if (students.length === 0) {
    redirect("/enrol");
  }
  return (
    <>
      <div className="flex w-full justify-between items-center mb-2">
        <h2 className="mx-2">Current Enrolments</h2>
        <Link
          className="text-center max-w-md bg-blue-500 hover:bg-blue-700 text-white p-2 rounded focus:outline-none focus:shadow-outline"
          href="/enrol"
        >
          Enrol a child
        </Link>
      </div>
      {students.map(
        ({ firstName, lastName, school, instrument, id }, index) => (
          <EnrolledChild
            key={id}
            id={id}
            name={firstName + " " + lastName}
            school={school.name}
            instrument={instrument}
          />
        )
      )}
    </>
  );
};

export default CurrentEnrolments;
