import React from "react";
import EnrolledChild from "./EnrolledChild";
import Link from "next/link";

const CurrentEnrolments = ({ students }) => {
  return (
    <>
      <div className="flex w-full justify-between items-center mb-2">
        <h2 className="mx-2">Current Enrolments</h2>
        <Link
          className="btn border p-1 bg-orange-400 font-bold text-slate-700 rounded"
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
