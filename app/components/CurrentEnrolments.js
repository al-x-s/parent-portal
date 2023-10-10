import React from "react";
import EnrolledChild from "./EnrolledChild";
import Link from "next/link";

const CurrentEnrolments = () => {
  return (
    <>
      <div className="flex w-full justify-between items-center">
        <h2 className="mx-2">Current Enrolments</h2>
        <Link
          className="btn border p-1 bg-orange-400 font-bold text-slate-700 rounded"
          href="/enrol"
        >
          Enrol a child
        </Link>
      </div>
      <EnrolledChild
        name={"Harry Edwards"}
        school={"North Rocks Public School"}
        instrument={"Clarinet"}
      />
      <EnrolledChild
        name={"Jennifer Edwards"}
        school={"North Rocks Public School"}
        instrument={"Piano"}
      />
    </>
  );
};

export default CurrentEnrolments;
