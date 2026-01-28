import { Button } from "@/shared/components/ui";
import React from "react";
import { Input } from "@/shared/components/ui/input";
import { MarkdownEditor } from "@/features/markdown-editor";
import { SearchTags } from "@/features/search-tags";

export const CreatePostPage: React.FC = () => {
    return (
        <div className="w-full max-w-180">
            <Input className="bg-white mb-3 text-lg placeholder:text-[16px] py-5" placeholder="Enter title for the post" />
            <MarkdownEditor />
            <SearchTags />
            <div className="inline-flex items-center bg-white rounded-md p-1 mb-5">
                {/* <Difficulty className="py-1 px-5 rounded-md bg-[#f1f1f1]" />
                <Difficulty className="py-1 px-5 rounded-md" />
                <Difficulty className="py-1 px-5 rounded-md" />
                <Difficulty className="py-1 px-5 rounded-md" /> */}
            </div>
            <div className="flex justify-end w-full">
                <Button className="w-full max-w-50">Publish new post</Button>
            </div>
        </div>
    );
};
