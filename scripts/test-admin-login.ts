import "dotenv/config";
import { auth } from "@/lib/auth";

async function run() {
  try {
    const res = await auth.api.signInEmail({
      body: { email: "admin123@gmail.com", password: "admin@123" },
    });

    console.log("signInEmail result:", res);
  } catch (err) {
    console.error("signInEmail error:", err);
  }
}

run();
