import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";

export async function POST(request) {
  const body = await request.json();
  console.log(body);
  const user = await prisma.user.findUnique({ where: { email: body.email } });

  const newStudent = await prisma.student.create({
    data: {
      firstName: body.firstName,
      lastName: body.lastName,
      school: body.school,
      grade: Number(body.grade),
      instrument: body.instrument,
      hirePurchaseOptions: body.hirePurchaseOptions,
      parentId: user.id,
    },
  });

  return NextResponse.json(newStudent, { status: 200 });
}
