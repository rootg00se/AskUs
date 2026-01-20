import React from "react";
import logo from "@/shared/assets/images/logo.png";
import { Avatar, AvatarFallback, AvatarImage } from "@/shared/components/ui";
import { Link } from "react-router-dom";
import { SearchPostsInput } from "@/features/search-posts";
import { isActivated, useUser } from "@/entities/user";

export const Header: React.FC = () => {
    const isUserActivated = isActivated();
    const { userData } = useUser();

    return (
        <header className="py-3 bg-white sticky top-0 z-10 border-b">
            <div className="_container flex items-center justify-between">
                <div className="max-w-35">
                    <img src={logo} className="w-full" alt="" />
                </div>
                <SearchPostsInput />
                {isUserActivated && userData ? (
                    <div className="flex items-center gap-4">
                        <Avatar className="w-10 h-10">
                            <AvatarImage src={userData.avatar_url} />
                            <AvatarFallback className="text-sm bg-[#dadada]">{userData.display_name.slice(0,2)}</AvatarFallback>
                        </Avatar>
                        <div className="text-[16px]">{userData.display_name}</div>
                    </div>
                ) : (
                    <div className="flex items-center gap-2">
                        <Link to={"/sign-in"} className="underline">
                            Sign In
                        </Link>
                        <div className="h-6 bg-accent-foreground w-[0.2px] block"></div>
                        <Link className="cursor-pointer bg-primary text-white rounded-md py-2 px-4" to={"/sign-up"}>Sign Up</Link>
                    </div>
                )}
            </div>
        </header>
    );
};
