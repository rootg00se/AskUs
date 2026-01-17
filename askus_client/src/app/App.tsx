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
import { GuestProtectedRoutes } from "./routes/quest-protected-routes";
import { AuthProtectedRoutes } from "./routes/auth-protected-routes";

const App: React.FC = () => {
    return (
        <div className="wrap">
            <Routes>
                <Route path="*" element={<NotFoundPage />} />
                <Route path="/verify" element={<VerifyPage />} />
                <Route element={<AuthProtectedRoutes />}>
                    <Route path="/confirm" element={<ConfirmPage />} />
                </Route>
                <Route path="/" element={<AppLayout />}>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/profile/:id" element={<ProfilePage />} />
                    <Route path="/post/:id" element={<PostPage />} />
                    <Route element={<AuthProtectedRoutes />}>
                        <Route path="/post/create" element={<CreatePostPage />} />
                    </Route>
                </Route>
                <Route path="/" element={<AuthLayout />}>
                    <Route element={<GuestProtectedRoutes />}>
                        <Route path="/sign-up" element={<SignUpPage />} />
                        <Route path="/sign-in" element={<SignInPage />} />
                        <Route path="/2fa" element={<TwoFactorAuthPage />} />
                    </Route>
                    <Route element={<AuthProtectedRoutes />}>
                        <Route path="/new-password" element={<NewPasswordPage />} />
                        <Route path="/password-reset" element={<PasswordResetPage />} />
                    </Route>
                </Route>
            </Routes>
        </div>
    );
};

export default App;
