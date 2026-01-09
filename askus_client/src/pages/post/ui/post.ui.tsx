import { Button } from "@/shared/components/ui";
import React from "react";
import { Heart, MessageCircle, PlusCircle } from "lucide-react";
import icon from "@/shared/assets/images/text-icon.png";
import icon6 from "@/shared/assets/images/test-icon-6.png";
import avatar from "@/shared/assets/images/test-avatar.jpg";
import { Input } from "@/shared/components/ui/input";

export const PostPage: React.FC = () => {
    return (
        <section className="w-full max-w-180">
            <div className="bg-white rounded-md p-5">
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
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit provident, cum eum deleniti quisquam corporis delectus molestiae.
                            Voluptatibus repellendus, debitis, sapiente explicabo similique laborum placeat minima optio qui porro totam. Numquam fuga ea enim
                            ut?
                        </p>
                    </div>
                    <div className="flex items-center gap-4 mb-3">
                        <span className="opacity-50 font-medium">#games</span>
                        <span className="opacity-50 font-medium">#sekiro</span>
                        <span className="opacity-50 font-medium">#tea</span>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2">
                            <Heart size={18} />
                            <span className="">20</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <MessageCircle size={18} />
                            <span className="">3</span>
                        </div>
                    </div>
                </div>
                <div className="border rounded-md flex-col">
                    <Input
                        className="border-none shadow-none focus:border-none focus:outline-0 focus:ring-0 outline-0 focus-visible:border-none focus-visible:ring-0"
                        placeholder="Enter your answer..."
                    />
                    <div className="mr-2 mb-2">
                        <Button size={"sm"} className="ml-[100%] -translate-x-full text-[13px]">
                            Send answer
                        </Button>
                    </div>
                </div>
                <div className="mt-10">
                    <div className="border-b pb-2">
                        <div className="flex items-center gap-3 mb-3">
                            <div className="rounded-full max-w-11">
                                <img src={avatar} className="w-full rounded-full" alt="" />
                            </div>
                            <div>
                                <div className="flex items-center gap-2 mb-1">
                                    <span className="text-md">Legend</span>
                                    <span className="text-[12px] opacity-50">1 hour ago</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="max-w-4">
                                        <img src={icon} className="w-full" alt="" />
                                    </div>
                                    <p className="text-[14px]">Better call me</p>
                                </div>
                            </div>
                        </div>
                        <p className="mb-1">Please bro just take shower already 🙏🙏🙏</p>
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-1 opacity-70">
                                <PlusCircle size={16} />
                                <span className="text-sm">1 Answers</span>
                            </div>
                            <Button variant={"link"}>Answer</Button>
                        </div>
                    </div>
                    <div className="border-b pb-2 pt-4">
                        <div className="flex items-center gap-3 mb-3">
                            <div className="rounded-full max-w-11">
                                <img src={avatar} className="w-full rounded-full" alt="" />
                            </div>
                            <div>
                                <div className="flex items-center gap-2 mb-1">
                                    <span className="text-md">Legend</span>
                                    <span className="text-[12px] opacity-50">1 hour ago</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="max-w-4">
                                        <img src={icon} className="w-full" alt="" />
                                    </div>
                                    <p className="text-[14px]">Better call me</p>
                                </div>
                            </div>
                        </div>
                        <p className="mb-1">Please bro just take shower already 🙏🙏🙏</p>
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-1 opacity-70">
                                <PlusCircle size={16} />
                                <span className="text-sm">1 Answers</span>
                            </div>
                            <Button variant={"link"}>Answer</Button>
                        </div>
                    </div>
                    <div className="pt-4">
                        <div className="flex items-center gap-3 mb-3">
                            <div className="rounded-full max-w-11">
                                <img src={avatar} className="w-full rounded-full" alt="" />
                            </div>
                            <div>
                                <div className="flex items-center gap-2 mb-1">
                                    <span className="text-md">Legend</span>
                                    <span className="text-[12px] opacity-50">1 hour ago</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="max-w-4">
                                        <img src={icon} className="w-full" alt="" />
                                    </div>
                                    <p className="text-[14px]">Better call me</p>
                                </div>
                            </div>
                        </div>
                        <p className="mb-1">Please bro just take shower already 🙏🙏🙏</p>
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-1 opacity-70">
                                <PlusCircle size={16} />
                                <span className="text-sm">1 Answers</span>
                            </div>
                            <Button variant={"link"}>Answer</Button>
                        </div>
                    </div>
                    <div className="pt-4">
                        <div className="flex items-center gap-3 mb-3">
                            <div className="rounded-full max-w-11">
                                <img src={avatar} className="w-full rounded-full" alt="" />
                            </div>
                            <div>
                                <div className="flex items-center gap-2 mb-1">
                                    <span className="text-md">Legend</span>
                                    <span className="text-[12px] opacity-50">1 hour ago</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="max-w-4">
                                        <img src={icon} className="w-full" alt="" />
                                    </div>
                                    <p className="text-[14px]">Better call me</p>
                                </div>
                            </div>
                        </div>
                        <p className="mb-1">Please bro just take shower already 🙏🙏🙏</p>
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-1 opacity-70">
                                <PlusCircle size={16} />
                                <span className="text-sm">1 Answers</span>
                            </div>
                            <Button variant={"link"}>Answer</Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
