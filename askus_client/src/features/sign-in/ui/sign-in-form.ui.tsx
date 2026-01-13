import { Button, Label } from "@/shared/components/ui";
import { Input } from "@/shared/components/ui/input";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-toastify";
import { useSignIn } from "@/entities/auth";
import { signInFormSchema, type SignInFields } from "../model/validation-schemas";

export const SignInForm: React.FC = () => {
    const { signInFunc, isSignInPending } = useSignIn();

    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm<SignInFields>({
        resolver: zodResolver(signInFormSchema),
        mode: "onChange",
    });

    const onSubmit = (data: SignInFields) => signInFunc(data);
    const onErroSubmit = () => toast.error("Please, fill the form correct!");

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
            <Button type="submit" className="w-full mt-6" disabled={isSignInPending}>
                Sign in
            </Button>
        </form>
    );
};
