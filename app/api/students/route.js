import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";

export async function POST(request) {
  const body = await request.json();
  const user = await prisma.user.findUnique({ where: { email: body.email } });
  const school = await prisma.school.findFirst({
    where: { name: body.school },
  });

  let currentBook;
  if (body.instrument === "Piano") {
    currentBook = "Alfred's Basic Piano Prep Course Level A";
  } else {
    currentBook = "Accent on Achievement Book 1";
  }

  const bookData = await prisma.methodBook.findFirst({
    where: { name: currentBook },
  });

  const newStudent = await prisma.student.create({
    data: {
      firstName: body.firstName,
      lastName: body.lastName,
      school: {
        connect: { id: school.id },
      },
      grade: Number(body.grade),
      instrument: body.instrument,
      hirePurchaseOptions: body.hirePurchaseOptions,
      parent: {
        connect: { id: user.id },
      },
      currentBook: {
        connect: { id: bookData.id },
      },
    },
  });

  return NextResponse.json(newStudent, { status: 200 });
}
