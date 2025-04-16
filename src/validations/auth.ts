import { z } from "zod";

export const loginSchema = z.object({
  username: z.string().min(1, "Username is required"),
  password: z
    .string({ required_error: "Password is required" })
    .min(1, "Password is required"),
});

export const registerSchema = z
  .object({
    avatar: z.instanceof(File),
    first_name: z.string().min(3, "First name is required"),
    last_name: z.string().min(3, "Last name is required"),
    username: z.string().min(3, "Username is required"),
    password: z
      .string({ required_error: "Password is required" })
      .min(6, "Password is required"),
    confirm_password: z
      .string({ required_error: "Confirm password is required" })
      .min(6, "Confirm password is required"),
  })
  .refine((data) => data.password === data.confirm_password, {
    path: ["confirmPassword"],
    message: "Passwords do not match",
  });
