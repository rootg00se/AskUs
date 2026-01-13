import z from "zod";

export const signUpFormSchema = z
    .object({
        email: z
            .string({ message: "Email must be a string" })
            .email({ message: "Email is incorrect" })
            .nonempty({ message: "Email is required" }),
        displayName: z
            .string({ message: "Nickname must be a string" })
            .nonempty({ message: "Nickname can't be empty" })
            .min(2, { message: "Nickname should be at least 2 symbols" })
            .max(64, { message: "Nickname can't be longer than 64 symbols" }),
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

export type SignUpFields = z.infer<typeof signUpFormSchema>;