import z from "zod";

export const ZRegister = z.object({
  name: z.string().min(3, "Name must be at least 3 characters"),
  email: z.email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  role: z.enum(["ADMIN", "AGENT"]).optional(),
  phoneNumber: z
    .string()
    .regex(/^[0-9]{11,14}$/, "Phone must be 11 to 14 digits"),
  countryCode: z.string(),
});

export const ZLogin = z.object({
  email: z.email("Email must be valid!"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});


export const ZAdminLogin = z.object({
email: z.email("Email must be valid!"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  
})