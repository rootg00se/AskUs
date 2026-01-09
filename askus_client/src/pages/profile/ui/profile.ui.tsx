import { Button } from "@/shared/components/ui";
import React from "react";
import { Heart, MessageCircle } from "lucide-react";
import icon from "@/shared/assets/images/text-icon.png";
import icon6 from "@/shared/assets/images/test-icon-6.png";
import avatar from "@/shared/assets/images/test-avatar.jpg";

export const ProfilePage: React.FC = () => {
    return (
        <section className="w-full max-w-180">
            <div className="bg-white rounded-md p-5 flex items-start justify-between">
                <div className="">
                    <div className="max-w-30 mb-3">
                        <img src={avatar} className="w-full" alt="" />
                    </div>
                    <div className="">
                        <div className="mb-5">
                            <p className="text-3xl font-medium">RootG00se</p>
                            <p className="text-sm opacity-50">gorc14408@gmail.com</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="max-w-6">
                                <img src={icon} className="w-full" alt="" />
                            </div>
                            <p className="">Better call me</p>
                        </div>
                    </div>
                </div>
                <div className="w-full max-w-40">
                    <Button className="mb-4 w-full">Edit profile</Button>
                    <div className="max-w-8 ml-auto">
                        <img src={icon} className="w-full" alt="" />
                    </div>
                </div>
            </div>
            <div className="bg-white rounded-md p-1 flex items-center mt-3">
                <div className="flex items-center gap-3 py-1 px-3 rounded-md bg-[#f1f1f1]">
                    <span>❓</span>
                    <p className="text-sm opacity-80">My Posts</p>
                </div>
                <div className="flex items-center gap-3 py-1 px-3 rounded-md">
                    <span>‼️</span>
                    <p className="text-sm opacity-80">My answers</p>
                </div>
                <div className="flex items-center gap-3 py-1 px-3 rounded-md">
                    <span>🎖</span>
                    <p className="text-sm opacity-80">Ranks</p>
                </div>
            </div>
            <div className="rounded-md py-4 px-5 bg-white mt-5">
                <div className="pb-4 border-b">
                    <div className="flex items-start justify-between">
                        <div className="flex items-center gap-4 mb-3">
                            <div className="rounded-full max-w-12">
                                <img src={avatar} className="w-full rounded-full" alt="" />
                            </div>
                            <div>
                                <div className="flex items-center gap-2 mb-1">
                                    <span className="">RootG00se</span>
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
                        <div className="max-w-6">
                            <img src={icon6} className="w-full" alt="" />
                        </div>
                    </div>
                    <p className="text-lg font-medium mb-3">How to get platina in sekiro?</p>
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
                <div className="py-4 border-b">
                    <div className="flex items-start justify-between">
                        <div className="flex items-center gap-4 mb-3">
                            <div className="rounded-full max-w-12">
                                <img src={avatar} className="w-full rounded-full" alt="" />
                            </div>
                            <div>
                                <div className="flex items-center gap-2 mb-1">
                                    <span className="">RootG00se</span>
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
                        <div className="max-w-6">
                            <img src={icon6} className="w-full" alt="" />
                        </div>
                    </div>
                    <p className="text-lg font-medium mb-3">How to get platina in sekiro?</p>
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
                <div className="py-4 border-b">
                    <div className="flex items-start justify-between">
                        <div className="flex items-center gap-4 mb-3">
                            <div className="rounded-full max-w-12">
                                <img src={avatar} className="w-full rounded-full" alt="" />
                            </div>
                            <div>
                                <div className="flex items-center gap-2 mb-1">
                                    <span className="">RootG00se</span>
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
                        <div className="max-w-6">
                            <img src={icon6} className="w-full" alt="" />
                        </div>
                    </div>
                    <p className="text-lg font-medium mb-3">How to get platina in sekiro?</p>
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
                <div className="pt-4">
                    <div className="flex items-start justify-between">
                        <div className="flex items-center gap-4 mb-3">
                            <div className="rounded-full max-w-12">
                                <img src={avatar} className="w-full rounded-full" alt="" />
                            </div>
                            <div>
                                <div className="flex items-center gap-2 mb-1">
                                    <span className="">RootG00se</span>
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
                        <div className="max-w-6">
                            <img src={icon6} className="w-full" alt="" />
                        </div>
                    </div>
                    <p className="text-lg font-medium mb-3">How to get platina in sekiro?</p>
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
            </div>
        </section>
    );
};
