import { useNewPassword } from "@/entities/auth";
import { Button, Label } from "@/shared/components/ui";
import { Input } from "@/shared/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";
import { newPasswordFormSchema, type NewPasswordFields } from "../model/validation-schemas";

export const NewPasswordForm: React.FC = () => {
    const { newPasswordFunc, isNewPasswordPenfing } = useNewPassword();
    const [searchParams, _] = useSearchParams();

    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm<NewPasswordFields>({
        resolver: zodResolver(newPasswordFormSchema),
        mode: "onChange",
    });

    const onSubmit = (data: NewPasswordFields) => newPasswordFunc({ 
        password: data.password, 
        token: searchParams.get("token")! 
    });

    const onErroSubmit = () => toast.error("Please, fill the form correct!");

    return (
        <form onSubmit={handleSubmit(onSubmit, onErroSubmit)}>
            <div className="flex flex-col gap-6">
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
                <Button type="submit" className="w-full" disabled={isNewPasswordPenfing}>
                    Reset password
                </Button>
            </div>
        </form>
    );
};
