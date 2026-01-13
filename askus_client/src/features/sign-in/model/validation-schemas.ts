import z from "zod";

export const signInFormSchema = z
    .object({
        email: z
            .string({ message: "Email must be a string" })
            .email({ message: "Email is incorrect" })
            .nonempty({ message: "Email is required" }),
        password: z
            .string({ message: "Password must be a string" })
            .nonempty({ message: "Password can't be empty" })
            .min(8, { message: "Password should be at least 8 symbols" })
            .max(16, { message: "Password can't be longer than 16 symbols" }),
    })

export type SignInFields = z.infer<typeof signInFormSchema>;