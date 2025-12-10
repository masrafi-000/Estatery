import { auth } from "@/lib/auth";
import { Prisma } from "@/lib/generated/prisma/client";
import { ZRegister } from "@/validators/user";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const data = ZRegister.parse(body);

    if (
      !data.name ||
      !data.email ||
      !data.password ||
      !data.phoneNumber ||
      !data.countryCode
    ) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const user = await auth.api.signUpEmail({
      body: {
        email: data.email,
        password: data.password,
        name: data.name,
        role: data.role || "AGENT",
        phoneNumber: data.phoneNumber,
        countryCode: data.countryCode,
      },
    });

    return NextResponse.json(
      { message: "Account created successfully", user },
      { status: 201 }
    );
  } catch (err: any) {
    if (
      err instanceof Prisma.PrismaClientKnownRequestError &&
      err.code === "P2002"
    ) {
      return NextResponse.json(
        { error: "Email already exists" },
        { status: 409 }
      );
    }
    if (err.name === "ZodError") {
      return NextResponse.json({ error: err.errors }, { status: 400 });
    }

    console.error("Signup Error:", err);

    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
