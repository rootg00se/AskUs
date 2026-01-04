import { Mail } from "lucide-react";
import React from "react";

export const VerifyPage: React.FC = () => {
    return (
        <div className="w-screen h-screen flex justify-center items-center">
            <div className="max-w-100 text-center rounded-sm border p-7 border-[#989A99] mx-3 max-sm:p-4">
                <Mail className="m-auto mb-5" size={60} />
                <div className="mb-5 text-2xl font-medium">We've send an activation link to your email</div>
                <p className="">
                    We've sent a confirmation email to your inbox. Click the link inside to verify your address and complete registration. Can't find the email?
                    Check your Spam folder.
                </p>
            </div>
        </div>
    );
};
