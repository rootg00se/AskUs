import React from "react";
import icon from "@/shared/assets/images/text-icon.png";
import icon6 from "@/shared/assets/images/test-icon-6.png";
import avatar from "@/shared/assets/images/test-avatar.jpg";
import { PostDetailsButton } from "./post-details-buttons.ui";
import { PostDetailsTag } from "./post-details-tag.ui";

export const PostDetails: React.FC = () => {
    return (
        <div className="mb-5">
            <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-4 mb-3">
                    <div className="rounded-full max-w-14">
                        <img src={avatar} className="w-full rounded-full" alt="" />
                    </div>
                    <div>
                        <div className="flex items-center gap-2 mb-1">
                            <span className="text-lg">RootG00se</span>
                            <span className="text-sm opacity-50">1 hour ago</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="max-w-5">
                                <img src={icon} className="w-full" alt="" />
                            </div>
                            <p className="text-[14px]">Programming</p>
                        </div>
                    </div>
                </div>
                <div className="max-w-8">
                    <img src={icon6} className="w-full" alt="" />
                </div>
            </div>
            <div className="mb-3">
                <h2 className="text-2xl font-medium mb-5">How to get platina in sekiro?</h2>
                <p className="">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit provident, cum eum deleniti quisquam corporis delectus molestiae. Voluptatibus
                    repellendus, debitis, sapiente explicabo similique laborum placeat minima optio qui porro totam. Numquam fuga ea enim ut?
                </p>
            </div>
            <div className="flex items-center gap-4 mb-3">
                <PostDetailsTag />
                <PostDetailsTag />
            </div>
            <PostDetailsButton />
        </div>
    );
};
