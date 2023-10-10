import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await getServerSession(authOptions);

  if (session) {
    redirect("/dashboard");
  }

  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <h1 className="pb-5">
          Welcome to the Teaching Services Australia Parent Portal
        </h1>
      </div>
    </>
  );
}
