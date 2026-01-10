import React from "react";
import { Bold, CodeXml, Heading, Link2Icon, List, ListOrdered, Quote, Strikethrough, Underline } from "lucide-react";

export const MarkdownToolbar: React.FC = () => {
    return (
        <div className="flex items-center p-3 gap-4 opacity-50">
            <Strikethrough size={18} />
            <Bold size={18} />
            <Underline size={18} />
            <div className="h-5 w-px bg-[#c9c9c9]"></div>
            <Heading size={18} />
            <ListOrdered size={18} />
            <List size={18} />
            <div className="h-5 w-px bg-[#c9c9c9]"></div>
            <Link2Icon size={18} />
            <Quote size={18} />
            <CodeXml size={18} />
        </div>
    );
};
