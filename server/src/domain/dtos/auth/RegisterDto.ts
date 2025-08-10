import { z } from "zod";

export const RegisterSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
  role: z.enum(["Driver", "Customer"]),
  name: z.string().min(1),
});

export type RegisterDto = z.infer<typeof RegisterSchema>;
