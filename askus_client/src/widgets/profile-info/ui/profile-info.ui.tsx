import React from "react";
import { Button } from "@/shared/components/ui";
import icon from "@/shared/assets/images/text-icon.png";
import avatar from "@/shared/assets/images/test-avatar.jpg";
import { Rank } from "@/shared/components/rank";

export const ProfileInfo: React.FC = () => {
    return (
        <div className="bg-white rounded-md p-5 flex items-start justify-between">
            <div className="">
                <div className="max-w-30 mb-3">
                    <img src={avatar} className="w-full" alt="" />
                </div>
                <div className="">
                    <div className="mb-5">
                        <p className="text-3xl font-medium">RootG00se</p>
                        <p className="text-sm opacity-50">gorc14408@gmail.com</p>
                    </div>
                    <Rank />
                </div>
            </div>
            <div className="w-full max-w-40">
                <Button className="mb-4 w-full">Edit profile</Button>
                <div className="max-w-8 ml-auto">
                    <img src={icon} className="w-full" alt="" />
                </div>
            </div>
        </div>
    );
};
