import { NewPasswordForm } from "@/features/new-password";
import { AuthCard } from "@/widgets/auth-card";
import React from "react";

export const NewPasswordPage: React.FC = () => {
    return (
        <AuthCard
            title="Change your password"
            description="Enter your new password and repeat it to change."
            buttonText="Change Password"
        >
            <NewPasswordForm />
        </AuthCard>
    );
};
