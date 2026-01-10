import React from "react";
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/shared/components/ui";
import { Search } from "lucide-react";

export const SearchPostsInput: React.FC = () => {
    return (
        <InputGroup className="max-w-150">
            <InputGroupInput placeholder="Search..." />
            <InputGroupAddon>
                <Search />
            </InputGroupAddon>
            <InputGroupAddon align="inline-end">12 results</InputGroupAddon>
        </InputGroup>
    );
};
