import { Textarea } from "@/shared/components/ui";
import React from "react";
import { MarkdownToolbar } from "./markdown-toolbar.ui";

export const MarkdownEditor: React.FC = () => {
    return (
        <div className="bg-white rounded-md mb-5">
            <MarkdownToolbar />
            <Textarea placeholder="Start typing" className="shadow-none border-none h-70 resize-none placeholder:text-[16px]" />
        </div>
    );
};
