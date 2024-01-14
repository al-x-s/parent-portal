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
      className="z-0 h-screen bg-cover bg-no-repeat p-7 flex justify-center bg-center
      
      bg-[linear-gradient(to_right_bottom,rgba(63,81,181,0.8),rgba(121,134,203,0.8)),url('https://teachingservices.com.au/wp-content/uploads/2019/08/Euphonium.jpeg')]"
    >
      <div className="flex flex-col h-fit">
        <h1 className="pb-2 text-xl text-slate-50 font-bold text-center">
          Teaching Services Australia Parent Portal
        </h1>
        <SignUpForm />

        <Button
          href="/preview"
          children="Preview App"
          className="text-center max-w-md bg-green-500 hover:bg-green-700 text-white font-bold py-2 rounded focus:outline-none focus:shadow-outline mx-8"
        />
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
