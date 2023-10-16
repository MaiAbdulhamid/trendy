import z from "zod";

export const createUserSchema = z
  .object({
    dob: z.string().datetime({ offset: true }),
    full_name: z
      .string()
      .trim()
      .toLowerCase()
      .min(4, { message: "Username must be 4 or more characters long" }),
    email: z.string().email().trim().toLowerCase(),
    phone: z
      .string()
      .min(10, { message: "Phone numbers are a minimum of 10 digits" })
      .regex(/^[0-9]+$/, { message: "Only numbers are allowed" }),
    gender: z.number(),
		password: z.string().min(6, {message: "Password must be 6 or more characters long"}),
		confirmPassword: z.string().min(6, {message: "Confirm Password must be 6 or more characters long"})
  })
  .refine((data) => data.password === data.confirmPassword, {
		message: "Passwords don't match",
		path: ["confirm"],
});
