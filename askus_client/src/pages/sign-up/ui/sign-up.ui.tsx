import { OAuthButtons } from "@/features/oauth";
import { SignUpForm } from "@/features/sign-up";
import { AuthCard } from "@/widgets/auth-card";
import React from "react";
import { Link } from "react-router-dom";

export const SignUpPage: React.FC = () => {
    return (
        <AuthCard
            title="Sign up on AskUs!"
            description="Enter your email and password below to register"
            buttonText="Sign up"
            footer={<OAuthButtons />}
            topLink={
                <Link to="/sign-in" className="underline absolute top-10 right-10 text-primary text-lg">
                    Sign in
                </Link>
            }
        >
            <SignUpForm />
        </AuthCard>
    );
};
