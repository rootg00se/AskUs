import { Input } from "@/shared/components/ui/input";
import React from "react";
import { SearchTagItem } from "./search-tag-item.ui";

export const SearchTags: React.FC = () => {
    return (
        <div>
            <Input className="bg-white mb-3" placeholder="Search for tags..." />
            <div className="mb-6 flex flex-wrap gap-2">
                <SearchTagItem />
                <SearchTagItem />
                <SearchTagItem />
            </div>
        </div>
    );
};
