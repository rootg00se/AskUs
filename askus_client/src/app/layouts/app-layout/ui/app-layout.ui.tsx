import { Header } from "@/widgets/header";
import { Sidebar } from "@/widgets/sidebar";
import React from "react";
import { Outlet } from "react-router-dom";

export const AppLayout: React.FC = () => {
    return (
        <div>
            <Header />
            <main className="py-5">
                <div className="_container flex gap-13 relative">
                    <Sidebar />
                    <Outlet />
                </div>
            </main>
        </div>
    );
};
