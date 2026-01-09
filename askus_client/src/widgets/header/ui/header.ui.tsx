import React from "react";
import logo from "@/shared/assets/images/logo.png";
import { Button, InputGroup, InputGroupAddon, InputGroupInput } from "@/shared/components/ui";
import { Search } from "lucide-react";
import { Link } from "react-router-dom";

export const Header: React.FC = () => {
    return (
        <header className="py-3 bg-white sticky top-0 z-10 border-b">
            <div className="_container flex items-center justify-between">
                <div className="max-w-35">
                    <img src={logo} className="w-full" alt="" />
                </div>
                <InputGroup className="max-w-150">
                    <InputGroupInput placeholder="Search..." />
                    <InputGroupAddon>
                        <Search />
                    </InputGroupAddon>
                    <InputGroupAddon align="inline-end">12 results</InputGroupAddon>
                </InputGroup>
                <div className="flex items-center gap-2">
                    <Link to={""} className="underline">
                        Sign In
                    </Link>
                    <div className="h-6 bg-accent-foreground w-[0.2px] block"></div>
                    <Button className="cursor-pointer">Sign Up</Button>
                </div>
            </div>
        </header>
    );
};
