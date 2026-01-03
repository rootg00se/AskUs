import { Button, InputGroup, InputGroupAddon, InputGroupInput } from "@/shared/components/ui";
import React from "react";
import { Link } from "react-router-dom";
import logo from "@/shared/assets/images/logo.png";
import { Album, ArrowRight, Heart, Home, Lightbulb, Mail, MessageCircle, Phone, Search } from "lucide-react";
import icon from "@/shared/assets/images/text-icon.png";
import icon2 from "@/shared/assets/images/test-icon-2.png";
import icon3 from "@/shared/assets/images/test-icon-3.png";
import icon4 from "@/shared/assets/images/test-icon-4.png";
import icon5 from "@/shared/assets/images/test-icon-5.png";
import icon6 from "@/shared/assets/images/test-icon-6.png";
import icon7 from "@/shared/assets/images/test-icon-7.png";
import avatar from "@/shared/assets/images/test-avatar.jpg"

export const HomePage: React.FC = () => {
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
                        <div className="bg-white rounded-md p-1 flex items-center">
                            <div className="flex items-center gap-3 py-1 px-3 rounded-md bg-[#f1f1f1]">
                                <span>🌱</span>
                                <p className="text-sm opacity-80">New</p>
                            </div>
                            <div className="flex items-center gap-3 py-1 px-3 rounded-md">
                                <span>🔥</span>
                                <p className="text-sm opacity-80">Popular</p>
                            </div>
                            <div className="flex items-center gap-3 py-1 px-3 rounded-md">
                                <span>❌</span>
                                <p className="text-sm opacity-80">Recently closed</p>
                            </div>
                        </div>
                        <div className="mt-5">
                            <div className="rounded-md py-4 px-5 bg-white mb-7">
                                <div className="pb-4 border-b">
                                    <div className="flex items-center gap-4 mb-3">
                                        <div className="rounded-full max-w-12">
                                            <img src={avatar} className="w-full rounded-full" alt="" />
                                        </div>
                                        <div className="">
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
                                    <div className="flex items-center gap-4 mb-3">
                                        <div className="rounded-full max-w-12">
                                            <img src={avatar} className="w-full rounded-full" alt="" />
                                        </div>
                                        <div className="">
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
                                    <div className="flex items-center gap-4 mb-3">
                                        <div className="rounded-full max-w-12">
                                            <img src={avatar} className="w-full rounded-full" alt="" />
                                        </div>
                                        <div className="">
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
                                    <div className="flex items-center gap-4 mb-3">
                                        <div className="rounded-full max-w-12">
                                            <img src={avatar} className="w-full rounded-full" alt="" />
                                        </div>
                                        <div className="">
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
                            <div className="rounded-md py-4 px-5 bg-white">
                                <div className="pb-4 border-b">
                                    <div className="flex items-center gap-4 mb-3">
                                        <div className="rounded-full max-w-12">
                                            <img src={avatar} className="w-full rounded-full" alt="" />
                                        </div>
                                        <div className="">
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
                                    <div className="flex items-center gap-4 mb-3">
                                        <div className="rounded-full max-w-12">
                                            <img src={avatar} className="w-full rounded-full" alt="" />
                                        </div>
                                        <div className="">
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
                                    <div className="flex items-center gap-4 mb-3">
                                        <div className="rounded-full max-w-12">
                                            <img src={avatar} className="w-full rounded-full" alt="" />
                                        </div>
                                        <div className="">
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
                                    <div className="flex items-center gap-4 mb-3">
                                        <div className="rounded-full max-w-12">
                                            <img src={avatar} className="w-full rounded-full" alt="" />
                                        </div>
                                        <div className="">
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
                        </div>
                    </section>
                </div>
            </main>
            <footer></footer>
        </div>
    );
};
