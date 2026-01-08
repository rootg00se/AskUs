import { Button, InputGroup, InputGroupAddon, InputGroupInput, Textarea } from "@/shared/components/ui";
import React from "react";
import { Link } from "react-router-dom";
import logo from "@/shared/assets/images/logo.png";
import { Album, ArrowRight, Bold, CodeXml, Heading, Home, Lightbulb, Link2Icon, List, ListOrdered, Mail, Phone, Quote, Search, Strikethrough, Underline, X } from "lucide-react";
import icon from "@/shared/assets/images/text-icon.png";
import icon2 from "@/shared/assets/images/test-icon-2.png";
import icon3 from "@/shared/assets/images/test-icon-3.png";
import icon4 from "@/shared/assets/images/test-icon-4.png";
import icon5 from "@/shared/assets/images/test-icon-5.png";
import icon6 from "@/shared/assets/images/test-icon-6.png";
import icon7 from "@/shared/assets/images/test-icon-7.png";
import { Input } from "@/shared/components/ui/input";

export const CreatePostPage: React.FC = () => {
    return (
        <div>
            <header className="py-3 bg-white sticky top-0 z-10 border-b">
                <div className="_container flex items-center justify-between">
                    <div className="max-w-35">
                        <img src={logo} className="w-full" alt="" />
                    </div>
                    <InputGroup className="max-w-150">
                        <InputGroupInput placeholder="Search..." />
                        <InputGroupAddon>
                            <Search />
                        </InputGroupAddon>
                        <InputGroupAddon align="inline-end">12 results</InputGroupAddon>
                    </InputGroup>
                    <div className="flex items-center gap-2">
                        <Link to={""} className="underline">
                            Sign In
                        </Link>
                        <div className="h-6 bg-accent-foreground w-[0.2px] block"></div>
                        <Button className="cursor-pointer">Sign Up</Button>
                    </div>
                </div>
            </header>
            <main className="py-5">
                <div className="_container flex gap-13 relative">
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
                </div>
            </main>
        </div>
    );
};
