import React from "react";
import prisma from "@/prisma/client";
import StudentView from "../../../components/StudentView/StudentView";

const page = async ({ params }) => {
  const student = await prisma.student.findUnique({
    where: { id: params.id },
    include: {
      school: true,
      currentBook: true,
    },
  });
  console.log("Student Details:", student);
  return (
    <div className="flex flex-col justify-center items-center mt-2 mb-2">
      <StudentView student={student} />
    </div>
  );
};

export default page;
