import React from "react";
import authBackground from "@/shared/assets/images/backgrounds/auth-background.jpg";
import { Outlet } from "react-router-dom";

export const AuthLayout: React.FC = () => {
    return (
        <div className="w-screen h-screen flex items-center justify-center overflow-hidden">
            <div className="w-[50vw]">
                <img src={authBackground} alt="" />
            </div>
            <div className="w-[50vw] flex items-center justify-center">
                <Outlet />
            </div>
        </div>
    );
};
