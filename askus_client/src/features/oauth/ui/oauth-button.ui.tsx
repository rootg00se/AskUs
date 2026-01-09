import React from "react";
import { FaDiscord, FaGithub, FaGoogle } from "react-icons/fa";

export const OAuthButtons: React.FC = () => {
    return (
        <div className="flex items-center justify-between w-full gap-3">
            <div className="w-full border rounded-md p-2 flex justify-center">
                <FaGithub className="" size={22} />
            </div>
            <div className="w-full border rounded-md p-2 flex justify-center">
                <FaDiscord size={22} />
            </div>
            <div className="w-full border rounded-md p-2 flex justify-center">
                <FaGoogle size={22} />
            </div>
        </div>
    );
};
