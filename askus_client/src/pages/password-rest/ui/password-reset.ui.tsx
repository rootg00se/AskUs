import { PasswordResetForm } from "@/features/password-reset";
import { AuthCard } from "@/widgets/auth-card";
import React from "react";

export const PasswordResetPage: React.FC = () => {
    return (
        <AuthCard
            title="Reset password"
            description="Enter your email and get link to reset your password on email"
            buttonText="Reset Password"
        >
            <PasswordResetForm />
        </AuthCard>
    );
};
