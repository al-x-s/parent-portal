export { default } from "next-auth/middleware";

export const config = {
  matcher: [
    "/dashboard",
    "/api/students",
    // '/api/:path*',
    // insert other urls here to protect
  ],
};
