import { Button, Label } from "@/shared/components/ui";
import { Input } from "@/shared/components/ui/input";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
import { toast } from "react-toastify";

const signInFormSchema = z
    .object({
        email: z
            .string({ message: "Email must be a string" })
            .email({ message: "Email is incorrect" })
            .nonempty({ message: "Email is required" }),
        nickname: z
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

type SignInFields = z.infer<typeof signInFormSchema>;

export const SignInForm: React.FC = () => {
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm<SignInFields>({
        resolver: zodResolver(signInFormSchema),
        mode: "onChange",
    });

    const onSubmit = (data: SignInFields) => {};

    const onErroSubmit = () => {
        toast.error("Please, fill the form correct!");
    };

    return (
        <form onSubmit={handleSubmit(onSubmit, onErroSubmit)}>
            <div className="flex flex-col gap-6">
                <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input {...register("email")} id="email" type="email" placeholder="m@example.com" required />
                    <div className="text-primary text-sm">{errors.email?.message}</div>
                </div>
                <div className="grid gap-2">
                    <div className="flex items-center">
                        <Label htmlFor="password">Password</Label>
                        <a href="#" className="ml-auto inline-block text-sm underline-offset-4 hover:underline">
                            Forgot your password?
                        </a>
                    </div>
                    <Input {...register("password")} id="password" type="password" required />
                    <div className="text-primary text-sm">{errors.password?.message}</div>
                </div>
            </div>
            <Button type="submit" className="w-full mt-6">
                Sign in
            </Button>
        </form>
    );
};
