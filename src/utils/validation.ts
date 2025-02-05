import { z } from "zod";

export const schema = z.object({
  name: z
    .string()
    .trim()
    .min(3, "Your name should have atleast three characters")
    .nonempty("This field is required"),
  email: z.string().email("Invalid email format"),
  phone: z.string().regex(/^\+?[1-9]\d{1,14}$/, "Invalid phone number format"),
  message: z.string().trim().nonempty("This field is required"),
});

export type FormFields = z.infer<typeof schema>;
