import { auth } from "@/lib/auth";
import "dotenv/config";

async function run() {
  try {
    const res = await auth.api.signUpEmail({
      body: {
        email: "admin123@gmail.com",
        password: "admin@123",
        name: "Administrator",
        role: "ADMIN",
      },
    });

    console.log("signUpEmail result:", res);
  } catch (err) {
    console.error("signUpEmail error:", err);
  }
}

run();
