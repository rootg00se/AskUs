import { HomePage } from "@/pages/home";
import { NotFoundPage } from "@/pages/not-found";
import { SignInPage } from "@/pages/sign-in";
import { SignUpPage } from "@/pages/sign-up";
import type React from "react";
import { Route, Routes } from "react-router-dom";

const App: React.FC = () => {
    return (
        <div className="wrap">
            <Routes>
                <Route path="*" element={<NotFoundPage />} />
                <Route path="/" element={<HomePage />} />
                <Route path="/sign-up" element={<SignUpPage />} />
                <Route path="/sign-in" element={<SignInPage />} />
            </Routes>
        </div>
    );
};

export default App;
