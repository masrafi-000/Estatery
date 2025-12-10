"use server"

import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";

export async function signupAction(formData: FormData) {
    const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const role = formData.get("role") as "ADMIN" | "AGENT";

   const user = await auth.api.signUpEmail({
    body: {
      email,
      password,
      name,
      role: role || "AGENT", 
    },
  });

   if (!user) {
    return { error: "Failed to create account" };
  }

   redirect("/dashboard");
}