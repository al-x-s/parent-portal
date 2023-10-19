import CurrentEnrolments from "../components/CurrentEnrolments";
import Greeting from "../components/Greeting";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import prisma from "@/prisma/client";

export default async function DashboardHome() {
  const session = await getServerSession(authOptions);

  const user = await prisma.user.findUnique({
    where: { email: session.user.email },
  });

  const students = await prisma.student.findMany({
    where: { parentId: user.id },
    include: {
      school: true,
    },
  });

  return (
    <main className="p-5 flex justify-center">
      <div className="flex flex-col items-center justify-center">
        <Greeting name={session.user.name} />
        <CurrentEnrolments students={students} />
      </div>
    </main>
  );
}
