import React from "react";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import EnrolChildForm from "../components/EnrolChildForm";

const pages = async () => {
  const session = await getServerSession(authOptions);
  return (
    <main className="p-5 flex justify-center">
      <div className="flex flex-col items-center justify-center">
        <h1>Enrol Your Child</h1>
        <EnrolChildForm email={session.user.email} />
      </div>
    </main>
  );
};

export default pages;
