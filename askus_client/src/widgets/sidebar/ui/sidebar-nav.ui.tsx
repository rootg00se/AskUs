import { selectUserId } from "@/entities/user";
import { Album, Home, Lightbulb } from "lucide-react";
import React from "react";
import { NavLink, useLocation } from "react-router-dom";

export const SidebarNav: React.FC = () => {
    const userId = selectUserId();
    const { search } = useLocation();

    const tab = new URLSearchParams(search).get("tab");

    return (
        <div className="pb-4">
            <NavLink
                to={`/`}
                style={({ isActive }) => ({
                    color: isActive ? "#ec003f" : "#09090b",
                    backgroundColor: isActive ? "#fff" : "transparent",
                })}
                className="flex items-center gap-3 py-2 px-3 w-full rounded-md bg-white cursor-pointer"
            >
                <Home size={20} />
                <p className="">Home</p>
            </NavLink>
            <NavLink
                to={`/profile/${userId}?tab=posts`}
                style={({ isActive }) => ({
                    color: (isActive && (tab === 'posts' || !tab)) ? "#ec003f" : "#09090b",
                    backgroundColor: (isActive && (tab === 'posts' || !tab)) ? "#fff" : "transparent",
                })}
                className="flex items-center gap-3 py-2 px-3 w-full rounded-md cursor-pointer"
            >
                <Album size={20} />
                <p className="">My posts</p>
            </NavLink>
            <NavLink
                to={`/profile/${userId}?tab=answers`}
                style={({ isActive }) => ({
                    color: (isActive && (tab === 'answers')) ? "#ec003f" : "#09090b",
                    backgroundColor: (isActive && tab === "answers" ) ? "#fff" : "transparent",
                })}
                className="flex items-center gap-3 py-2 px-3 w-full rounded-md cursor-pointer"
            >
                <Lightbulb size={20} />
                <p className="">My answers</p>
            </NavLink>
        </div>
    );
};
