import { Button, Label } from "@/shared/components/ui";
import { Input } from "@/shared/components/ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { toast } from "react-toastify";
import { useSignUp } from "@/entities/auth";
import { signUpFormSchema, type SignUpFields } from "../model/validation-schemas";

export const SignUpForm: React.FC = () => {
    const { singUpFunc, isSignUpPending } = useSignUp();

    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm<SignUpFields>({
        resolver: zodResolver(signUpFormSchema),
        mode: "onChange",
    });

    const onSubmit = (data: SignUpFields) => singUpFunc(data);
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
                    <Label htmlFor="nickname">Nickname</Label>
                    <Input {...register("displayName")} placeholder="YourCoolNickname" id="nickname" type="text" required />
                    <div className="text-primary text-sm">{errors.displayName?.message}</div>
                </div>
                <div className="grid gap-2">
                    <Label htmlFor="password">Password</Label>
                    <Input {...register("password")} id="password" type="password" required />
                    <div className="text-primary text-sm">{errors.password?.message}</div>
                </div>
                <div className="grid gap-2">
                    <Label htmlFor="passwordRepeat">Repeat Password</Label>
                    <Input {...register("repeatPassword")} id="passwordRepeat" type="password" required />
                    <div className="text-primary text-sm">{errors.repeatPassword?.message}</div>
                </div>
            </div>
            <Button type="submit" className="w-full mt-6" disabled={isSignUpPending}>Sign up</Button>
        </form>
    );
};
