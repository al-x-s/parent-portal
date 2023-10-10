import CurrentEnrolments from "../components/CurrentEnrolments";
import Greeting from "../components/Greeting";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";

export default async function DashboardHome() {
  const session = await getServerSession(authOptions);

  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <Greeting name={session.user.name} />
        <CurrentEnrolments />
      </div>
    </>
  );
}
