import React from "react";
import { FaDiscord, FaGithub, FaGoogle } from "react-icons/fa";
import { handleOAuthRedirect } from "../model/handle-oauth-redirect";

export const OAuthButtons: React.FC = () => {
    return (
        <div className="flex items-center justify-between w-full gap-3">
            <div onClick={() => handleOAuthRedirect("github")} className="w-full border rounded-md p-2 flex justify-center">
                <FaGithub className="" size={22} />
            </div>
            <div className="w-full border rounded-md p-2 flex justify-center">
                <FaDiscord onClick={() => handleOAuthRedirect("discord")} size={22} />
            </div>
            <div className="w-full border rounded-md p-2 flex justify-center">
                <FaGoogle onClick={() => handleOAuthRedirect("google")} size={22} />
            </div>
        </div>
    );
};
