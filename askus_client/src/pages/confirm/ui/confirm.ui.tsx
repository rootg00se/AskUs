import { CheckCircle2 } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

export const ConfirmPage: React.FC = () => {
    return (
        <div className="w-screen h-screen flex justify-center items-center">
            <div className="max-w-100 text-center rounded-sm border p-7 border-[#989A99] mx-3 max-sm:p-4">
                <CheckCircle2 className="m-auto mb-5" size={70} />
                <div className="mb-5 text-2xl font-medium">Email Successfully Activated!</div>
                <p className="mb-7">
                    Your email has been confirmed and your account is now fully active. Welcome aboard! You can now enjoy all the features of our service. Happy
                    exploring!
                </p>
                <Link className="bg-primary text-white rounded-md px-3 py-2" to="/">Go Home</Link>
            </div>
        </div>
    );
};
