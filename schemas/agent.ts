import z from "zod";

export const ZAgentRegistration = z
  .object({
    firstName: z.string().min(2, "First name must be at least 2 characters"),
    lastName: z.string().min(2, "Last name must be at least 2 characters"),
    email: z.email("Please enter a valid email address"),
    phone: z.string().min(10, "Please enter a valid phone number"),
    password: z
      .string()
      .min(8, "Password must be at least 8 characters")
      .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
      .regex(/[a-z]/, "Password must contain at least one lowercase letter")
      .regex(/[0-9]/, "Password must contain at least one number"),
    confirmPassword: z.string(),

    licenseNumber: z.string().min(5, "Please enter a valid license number"),
    licenseState: z.string().min(2, "Please select your license state"),
    yearsExperience: z.string().min(1, "Please select years of experience"),
    specializations: z
      .string()
      .min(1, "Please select at least one specialization"),
    agencyName: z.string().optional(),
    agencyAddress: z.string().optional(),
    bio: z
      .string()
      .min(50, "Bio must be at least 50 characters")
      .max(500, "Bio cannot exceed 500 characters"),

    profilePhotoName: z.string().optional(),
    licenseCopyName: z.string().optional(),
    idProofName: z.string().optional(),

    termsAccepted: z
      .boolean()
      .refine(
        (val) => val === true,
        "You must accept the terms and conditions"
      ),
    codeOfConductAccepted: z
      .boolean()
      .refine((val) => val === true, "You must accept the code of conduct"),
    backgroundCheckConsent: z
      .boolean()
      .refine((val) => val === true, "Background check consent is required"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });


  export type ZAgentRegistrationPayload = z.infer<typeof ZAgentRegistration>