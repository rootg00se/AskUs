import { OAuthButtons } from "@/features/oauth";
import { SignInForm } from "@/features/sign-in";
import { AuthCard } from "@/widgets/auth-card";
import React from "react";
import { Link } from "react-router-dom";

export const SignInPage: React.FC = () => {
    return (
        <AuthCard
            title="Sign in on AskUs!"
            description="Enter your email and password below to login"
            buttonText="Sign in"
            footer={<OAuthButtons />}
            topLink={
                <Link to="/sign-up" className="underline absolute top-10 right-10 text-primary text-lg">
                    Sign up
                </Link>
            }
        >
            <SignInForm />
        </AuthCard>
    );
};
