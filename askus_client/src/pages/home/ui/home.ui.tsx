import { Button, InputGroup, InputGroupAddon, InputGroupInput } from "@/shared/components/ui";
import React from "react";
import { Link } from "react-router-dom";
import logo from "@/shared/assets/images/logo.png";
import { Album, ArrowRight, Home, Lightbulb, Mail, Phone, Search } from "lucide-react";
import icon from "@/shared/assets/images/text-icon.png";
import icon2 from "@/shared/assets/images/test-icon-2.png";
import icon3 from "@/shared/assets/images/test-icon-3.png";
import icon4 from "@/shared/assets/images/test-icon-4.png";
import icon5 from "@/shared/assets/images/test-icon-5.png";
import icon6 from "@/shared/assets/images/test-icon-6.png";
import icon7 from "@/shared/assets/images/test-icon-7.png";

export const HomePage: React.FC = () => {
    return (
        <div>
            <header className="py-3 bg-white">
                <div className="_container flex items-center justify-between">
                    <div className="max-w-25">
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
                <div className="_container flex gap-13">
                    <aside className="w-full max-w-60 h-full">
                        <div className="pb-4">
                            <div className="flex items-center gap-3 py-2 px-3 w-full rounded-md bg-white cursor-pointer">
                                <Home size={22} color="#ec003f" />
                                <p className="">Home</p>
                            </div>
                            <div className="flex items-center gap-3 py-2 px-3 w-full rounded-md cursor-pointer">
                                <Album size={22} />
                                <p className="">My posts</p>
                            </div>
                            <div className="flex items-center gap-3 py-2 px-3 w-full rounded-md cursor-pointer">
                                <Lightbulb size={22} />
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
                        <div className="mt-[70%] flex items-center gap-4">
                            <p className="opacity-70">Contact us: </p>
                            <div className="flex items-center gap-3">
                                <Mail size={20} className="opacity-80" />
                                <Phone size={20} className="opacity-80" />
                            </div>
                        </div>
                    </aside>
                    <section>section</section>
                </div>
            </main>
            <footer></footer>
        </div>
    );
};
