import { Album, ArrowRight, Home, Lightbulb, Mail, Phone } from "lucide-react";
import icon from "@/shared/assets/images/text-icon.png";
import icon2 from "@/shared/assets/images/test-icon-2.png";
import icon3 from "@/shared/assets/images/test-icon-3.png";
import icon4 from "@/shared/assets/images/test-icon-4.png";
import icon5 from "@/shared/assets/images/test-icon-5.png";
import icon6 from "@/shared/assets/images/test-icon-6.png";
import icon7 from "@/shared/assets/images/test-icon-7.png";
import React from "react";

export const Sidebar: React.FC = () => {
    return (
        <aside className="w-full max-w-60 h-full sticky top-22 self-start">
            <div className="pb-4">
                <div className="flex items-center gap-3 py-2 px-3 w-full rounded-md bg-white cursor-pointer">
                    <Home size={20} color="#ec003f" />
                    <p className="">Home</p>
                </div>
                <div className="flex items-center gap-3 py-2 px-3 w-full rounded-md cursor-pointer">
                    <Album size={20} />
                    <p className="">My posts</p>
                </div>
                <div className="flex items-center gap-3 py-2 px-3 w-full rounded-md cursor-pointer">
                    <Lightbulb size={20} />
                    <p className="">My answers</p>
                </div>
            </div>
            <div className="w-full h-px bg-[#c0c0c0]"></div>
            <div className="pt-3 pb-4">
                <p className="mb-4 opacity-55">Posts categories:</p>
                <div className="mb-8">
                    <div className="flex items-center gap-3 mb-3">
                        <div>
                            <img src={icon} alt="" />
                        </div>
                        <p>Programming</p>
                    </div>
                    <div className="flex items-center gap-3 mb-3">
                        <div>
                            <img src={icon2} alt="" />
                        </div>
                        <p>Chinese tea</p>
                    </div>
                    <div className="flex items-center gap-3 mb-3">
                        <div>
                            <img src={icon3} alt="" />
                        </div>
                        <p>Drawing</p>
                    </div>
                </div>
                <div className="flex items-center justify-between">
                    <p className="opacity-55">See more:</p>
                    <ArrowRight size={16} className="opacity-55" />
                </div>
            </div>
            <div className="w-full h-px bg-[#c0c0c0]"></div>
            <div className="py-3">
                <p className="mb-4 opacity-55">Posts difficulties:</p>
                <div className="mb-8">
                    <div className="flex items-center gap-3 mb-3">
                        <div>
                            <img src={icon4} alt="" />
                        </div>
                        <p>Easy</p>
                    </div>
                    <div className="flex items-center gap-3 mb-3">
                        <div>
                            <img src={icon5} alt="" />
                        </div>
                        <p>Intermediate</p>
                    </div>
                    <div className="flex items-center gap-3 mb-3">
                        <div>
                            <img src={icon6} alt="" />
                        </div>
                        <p>Hard</p>
                    </div>
                    <div className="flex items-center gap-3 mb-3">
                        <div>
                            <img src={icon7} alt="" />
                        </div>
                        <p>Grandmaster</p>
                    </div>
                </div>
            </div>
            <div className="mt-[90%] flex items-center gap-4">
                <p className="opacity-70">Contact us: </p>
                <div className="flex items-center gap-3">
                    <Mail size={20} className="opacity-80" />
                    <Phone size={20} className="opacity-80" />
                </div>
            </div>
        </aside>
    );
};
