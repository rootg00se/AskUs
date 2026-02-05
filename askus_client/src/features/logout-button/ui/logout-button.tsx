import { useLogout } from "@/entities/auth";
import { LogOut } from "lucide-react";
import React from "react";

export const LogoutButton: React.FC = () => {
    const { logoutFunc } = useLogout();

    return <LogOut onClick={() => logoutFunc()} className=" cursor-pointer text-primary float-right" />;
};
