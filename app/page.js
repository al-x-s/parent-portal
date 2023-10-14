import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import SignUpForm from "./components/SignUpForm";
import Button from "./components/Button";

export default async function Home() {
  const session = await getServerSession(authOptions);

  if (session) {
    redirect("/dashboard");
  }

  return (
    <main
      className="z-0 w-full h-screen bg-cover bg-no-repeat p-5 flex justify-center bg-center
      
      before:absolute
      before:inset-0
      
      before:bg-gradient-to-r
      before:from-indigo-500
      before:to-indigo-300
      before:opacity-75
      before:z-[-5]
      mix-blend-overlay"
      style={{
        backgroundImage:
          "url('https://teachingservices.com.au/wp-content/uploads/2019/08/Euphonium.jpeg')",
      }}
    >
      <div className="flex flex-col">
        <h1 className="pb-2 text-xl text-slate-50 font-bold text-center">
          Teaching Services Australia Parent Portal
        </h1>
        <SignUpForm />
        <p className="text-slate-50 text-center pb-2 font-bold">or</p>
        <Button
          href="api/auth/signin"
          children="Sign In"
          className="text-center max-w-md bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 rounded focus:outline-none focus:shadow-outline mx-8"
        />
      </div>
    </main>
  );
}
