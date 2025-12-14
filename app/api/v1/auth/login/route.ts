import { auth } from "@/lib/auth";
import { ZLogin } from "@/validators/user";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const data = ZLogin.parse(body);

    const user = await auth.api.signInEmail({
      body: {
        email: data.email,
        password: data.password,
      },
    });

    if (!user) {
      return NextResponse.json(
        { error: "Invalid email or password" },
        { status: 401 }
      );
    }

    return NextResponse.json(
      { message: "Login successful", user },
      { status: 200 }
    );
  } catch (err: any) {
    if (err.name === "ZodError") {
      return NextResponse.json({ error: err.errors }, { status: 400 });
    }

    console.error("Login Error:", err);

    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
