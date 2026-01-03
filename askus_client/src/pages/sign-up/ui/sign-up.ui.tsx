import { Button, Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, Label } from "@/shared/components/ui";
import { Input } from "@/shared/components/ui/input";
import React from "react";
import { FaDiscord, FaGithub, FaGoogle } from "react-icons/fa";
import authBackground from "@/shared/assets/images/backgrounds/auth-background.jpg";
import { Link } from "react-router-dom";

export const SignUpPage: React.FC = () => {
    return (
        <div className="w-screen h-screen flex items-center justify-center overflow-hidden">
            <div className="w-[50vw]">
                <img src={authBackground} alt="" />
            </div>
            <div className="w-[50vw] flex items-center justify-center">
                <Card className="w-full max-w-sm">
                    <CardHeader>
                        <CardTitle className="text-center text-lg">Sign up on AskUs!</CardTitle>
                        <CardDescription className="text-center">Enter your email and password below to register</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form>
                            <div className="flex flex-col gap-6">
                                <div className="grid gap-2">
                                    <Label htmlFor="email">Email</Label>
                                    <Input id="email" type="email" placeholder="m@example.com" required />
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="password">Nickname</Label>
                                    <Input placeholder="YourCoolNickname" id="password" type="password" required />
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="password">Password</Label>
                                    <Input id="password" type="password" required />
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="password">Repeat Password</Label>
                                    <Input id="password" type="password" required />
                                </div>
                            </div>
                        </form>
                    </CardContent>
                    <CardFooter className="flex-col gap-4">
                        <Button type="submit" className="w-full">
                            Sign up
                        </Button>
                        <div className="flex items-center justify-between w-full gap-3">
                            <div className="w-full border rounded-md p-2 flex justify-center">
                                <FaGithub className="" size={22} />
                            </div>
                            <div className="w-full border rounded-md p-2 flex justify-center">
                                <FaDiscord size={22} />
                            </div>
                            <div className="w-full border rounded-md p-2 flex justify-center">
                                <FaGoogle size={22} />
                            </div>
                        </div>
                    </CardFooter>
                </Card>
            </div>
            <Link to="/sign-in" className="underline absolute top-10 right-10 text-primary text-lg">Sign in</Link>
        </div>
    );
};
