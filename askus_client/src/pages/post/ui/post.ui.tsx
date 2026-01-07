import { Button, InputGroup, InputGroupAddon, InputGroupInput } from "@/shared/components/ui";
import React from "react";
import { Link } from "react-router-dom";
import logo from "@/shared/assets/images/logo.png";
import { Album, ArrowRight, Heart, Home, Lightbulb, Mail, MessageCircle, Phone, PlusCircle, Search } from "lucide-react";
import icon from "@/shared/assets/images/text-icon.png";
import icon2 from "@/shared/assets/images/test-icon-2.png";
import icon3 from "@/shared/assets/images/test-icon-3.png";
import icon4 from "@/shared/assets/images/test-icon-4.png";
import icon5 from "@/shared/assets/images/test-icon-5.png";
import icon6 from "@/shared/assets/images/test-icon-6.png";
import icon7 from "@/shared/assets/images/test-icon-7.png";
import avatar from "@/shared/assets/images/test-avatar.jpg";
import { Input } from "@/shared/components/ui/input";

export const PostPage: React.FC = () => {
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
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit provident, cum eum deleniti quisquam corporis delectus
                                        molestiae. Voluptatibus repellendus, debitis, sapiente explicabo similique laborum placeat minima optio qui porro totam.
                                        Numquam fuga ea enim ut?
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
                </div>
            </main>
        </div>
    );
};
