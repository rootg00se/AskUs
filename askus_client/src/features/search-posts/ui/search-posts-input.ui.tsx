import React, { useState } from "react";
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/shared/components/ui";
import { Search } from "lucide-react";
import { useDebounce } from "react-use"
import { usePostsFilterStore } from "@/features/posts-filter";

export const SearchPostsInput: React.FC = () => {
    const [value, setValue] = useState("");
    const setQuery = usePostsFilterStore(store => store.setQuery);

    useDebounce(() => {
        setQuery(value);
    }, 250, [value])

    return (
        <InputGroup className="max-w-150">
            <InputGroupInput value={value} onChange={(e) => setValue(e.target.value)} placeholder="Search..." />
            <InputGroupAddon>
                <Search />
            </InputGroupAddon>
            <InputGroupAddon align="inline-end">12 results</InputGroupAddon>
        </InputGroup>
    );
};
