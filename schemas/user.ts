import { z } from "zod";

export const signUpSchema = z
  .object({
    fullName: z.string().min(2, "Full name must be at least 2 characters"),
    email: z.string().email("Please enter a valid email address"),
    phone: z
      .string()
      .min(1, "Phone number is required")
      .regex(
        /^(?:\+?[1-9]\d{1,14}|0\d{9,10})$/,
        "Invalid phone number format. E.g., +1234567890"
      ),
    password: z.string().min(8, "Password must be at least 8 characters"),
    confirmPassword: z.string().min(1, "Confirm password is required"),
    termsAccepted: z.boolean().refine((val) => val === true, {
      message: "You must accept the terms and conditions",
    }),
    countryCode: z.string()
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

export const SignupServerSchema = signUpSchema.omit({
  confirmPassword: true,
});

export type SignupFormData = z.infer<typeof signUpSchema>;

export type SignupPayload = z.infer<typeof SignupServerSchema>;

export const loginSchema = z.object({
  email: z.email("Please enter a valid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

export type LoginFormData = z.infer<typeof loginSchema>;

export type ApiResponse<T = unknown> = {
  success: boolean;
  message: string;
  errors?: { [key: string]: string[] };
  user?: T;
  requires2FA?: boolean;
  requiresVerification?: boolean;
};

export interface UserJwtPayload {
  sub: string;
  email: string;
  accountType: "USER" | "AGENT";
  iat: number;
  exp: number;
}

export interface CurrentUserData {
  id: string;
  email: string;
  name?: string;
  accountType: "USER" | "AGENT";
}
