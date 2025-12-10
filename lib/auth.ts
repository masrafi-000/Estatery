import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import prisma from "./prisma";

export const auth = betterAuth({
  secret: process.env.BETTER_AUTH_SECRET,
  url: process.env.BETTER_AUTH_URL,
  database: prismaAdapter(prisma, {
    provider: "postgresql",
  }),
  emailAndPassword: {
    enabled: true,
  },
  user: {
    additionalFields: {
      role: {
        type: "string",
        required: false,
        defaultValue: "AGENT",
        input: true,
      },
      phoneNumber: {
        type: "string",
        required: false,
        defaultValue: 0,
        input: true,
      },
      countryCode: {
        type: "string",
        required: false,
        defaultValue: 880,
        input: true,
      },
    },
  },
});
