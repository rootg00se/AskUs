import { ConfirmPage } from "@/pages/confirm";
import { CreatePostPage } from "@/pages/create-post";
import { HomePage } from "@/pages/home";
import { NewPasswordPage } from "@/pages/new-password";
import { NotFoundPage } from "@/pages/not-found";
import { PasswordResetPage } from "@/pages/password-rest";
import { PostPage } from "@/pages/post";
import { ProfilePage } from "@/pages/profile";
import { SignInPage } from "@/pages/sign-in";
import { SignUpPage } from "@/pages/sign-up";
import { TwoFactorAuthPage } from "@/pages/two-factor-auth";
import { VerifyPage } from "@/pages/verify";
import type React from "react";
import { Route, Routes } from "react-router-dom";
import { AuthLayout } from "./layouts/auth-layout";
import { AppLayout } from "./layouts/app-layout";

const App: React.FC = () => {
    return (
        <div className="wrap">
            <Routes>
                <Route path="*" element={<NotFoundPage />} />
                <Route path="/verify" element={<VerifyPage />} />
                <Route path="/confirm" element={<ConfirmPage />} />
                <Route path="/" element={<AppLayout />}>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/profile/:id" element={<ProfilePage />} />
                    <Route path="/post/:id" element={<PostPage />} />
                    <Route path="/post/create" element={<CreatePostPage />} />
                </Route>
                <Route path="/" element={<AuthLayout />}>
                    <Route path="/sign-up" element={<SignUpPage />} />
                    <Route path="/sign-in" element={<SignInPage />} />
                    <Route path="/new-password" element={<NewPasswordPage />} />
                    <Route path="/2fa" element={<TwoFactorAuthPage />} />
                    <Route path="/password-reset" element={<PasswordResetPage />} />
                </Route>
            </Routes>
        </div>
    );
};

export default App;
