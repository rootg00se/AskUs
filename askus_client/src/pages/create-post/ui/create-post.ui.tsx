import { Button, Textarea } from "@/shared/components/ui";
import React from "react";
import { Bold, CodeXml, Heading, Link2Icon, List, ListOrdered, Quote, Strikethrough, Underline, X } from "lucide-react";
import icon4 from "@/shared/assets/images/test-icon-4.png";
import icon5 from "@/shared/assets/images/test-icon-5.png";
import icon6 from "@/shared/assets/images/test-icon-6.png";
import icon7 from "@/shared/assets/images/test-icon-7.png";
import { Input } from "@/shared/components/ui/input";

export const CreatePostPage: React.FC = () => {
    return (
        <div className="w-full max-w-180">
            <Input className="bg-white mb-3 text-lg placeholder:text-[16px] py-5" placeholder="Enter title for the post" />
            <div className="bg-white rounded-md mb-5">
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
                <Textarea placeholder="Start typing" className="shadow-none border-none h-70 resize-none placeholder:text-[16px]" />
            </div>
            <Input className="bg-white mb-3" placeholder="Search for tags..." />
            <div className="mb-6 flex flex-wrap gap-2">
                <div className="inline-flex items-center gap-2 bg-white rounded-md p-1">
                    <X size={15} className="opacity-70" />
                    <span className="text-sm opacity-70">#programming</span>
                </div>
                <div className="inline-flex items-center gap-2 bg-white rounded-md p-1">
                    <X size={15} className="opacity-70" />
                    <span className="text-sm opacity-70">#programming</span>
                </div>
                <div className="inline-flex items-center gap-2 bg-white rounded-md p-1">
                    <X size={15} className="opacity-70" />
                    <span className="text-sm opacity-70">#programming</span>
                </div>
                <div className="inline-flex items-center gap-2 bg-white rounded-md p-1">
                    <X size={15} className="opacity-70" />
                    <span className="text-sm opacity-70">#programming</span>
                </div>
                <div className="inline-flex items-center gap-2 bg-white rounded-md p-1">
                    <X size={15} className="opacity-70" />
                    <span className="text-sm opacity-70">#programming</span>
                </div>
                <div className="inline-flex items-center gap-2 bg-white rounded-md p-1">
                    <X size={15} className="opacity-70" />
                    <span className="text-sm opacity-70">#programming</span>
                </div>
            </div>
            <div className="inline-flex items-center bg-white rounded-md p-1 mb-5">
                <div className="flex items-center gap-3 py-1 px-5 rounded-md bg-[#f1f1f1]">
                    <div className="">
                        <img src={icon4} alt="" />
                    </div>
                    <div className="">Easy</div>
                </div>
                <div className="flex items-center gap-3 py-1 px-5 rounded-md">
                    <div className="">
                        <img src={icon5} alt="" />
                    </div>
                    <div className="">Intermediate</div>
                </div>
                <div className="flex items-center gap-3 py-1 px-5 rounded-md">
                    <div className="">
                        <img src={icon6} alt="" />
                    </div>
                    <div className="">Hard</div>
                </div>
                <div className="flex items-center gap-3 py-1 px-5 rounded-md">
                    <div className="">
                        <img src={icon7} alt="" />
                    </div>
                    <div className="">Grandmaster</div>
                </div>
            </div>
            <div className="flex justify-end w-full">
                <Button className="w-full max-w-50">Publish new post</Button>
            </div>
        </div>
    );
};
