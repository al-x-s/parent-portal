import { Suspense } from "react";
import "./globals.css";
import NavBar from "./components/NavBar";

import AuthProvider from "./auth/provider.js";

export const metadata = {
  title: "TSA Parent Portal",
  description:
    "Teaching Services Australia web-app for parents to manage their childs instrumental tuition",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <AuthProvider>
          <NavBar />
          <main className="p-5 flex justify-center">
            <Suspense fallback={<p>Loading...</p>}>{children}</Suspense>
          </main>
          <footer className="sticky bottom-0 bg-slate-700 text-white text-center p-2 mt-auto">
            Copyright Alex Slater
          </footer>
        </AuthProvider>
      </body>
    </html>
  );
}
