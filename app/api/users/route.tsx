import { NextRequest, NextResponse } from "next/server";
// import schema from "./schema"
import prisma from "@/prisma/client";

export async function GET(request: NextRequest) {
  // console.log(prisma);
  const users = await prisma.user.findMany();
  // console.log(users);
  return NextResponse.json(users);
}
