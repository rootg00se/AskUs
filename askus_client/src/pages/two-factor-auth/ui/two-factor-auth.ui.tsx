import { TwoFactorAuthForm } from "@/features/two-factor-auth";
import { AuthCard } from "@/widgets/auth-card";
import React from "react";

export const TwoFactorAuthPage: React.FC = () => {
    return (
        <AuthCard
            title="Two Facto Authentification"
            description="Enter 2fa code from your sms to sign in"
            buttonText="Sign in"
        >
            <TwoFactorAuthForm />
        </AuthCard>
    );
};
