import z from "zod";

export const resetPasswordFormSchema = z.object({
    email: z
        .string({ message: "Email must be a string" })
        .email({ message: "Email is incorrect" })
        .nonempty({ message: "Email is required" }),
});

export type ResetPasswordFields = z.infer<typeof resetPasswordFormSchema>;