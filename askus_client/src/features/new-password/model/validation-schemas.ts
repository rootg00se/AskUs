import z from "zod";

export const newPasswordFormSchema = z
    .object({
        password: z
            .string({ message: "Password must be a string" })
            .nonempty({ message: "Password can't be empty" })
            .min(8, { message: "Password should be at least 8 symbols" })
            .max(16, { message: "Password can't be longer than 16 symbols" }),
        repeatPassword: z
            .string({ message: "Repeat password must be a string" })
            .nonempty({ message: "Repeat password can't be empty" }),
    })
    .refine((data) => data.password === data.repeatPassword, {
        message: "Passwords not matchin",
        path: ["repeatPassword"],
    });

export type NewPasswordFields = z.infer<typeof newPasswordFormSchema>;