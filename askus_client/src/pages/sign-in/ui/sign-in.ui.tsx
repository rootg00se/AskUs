import { Button, Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, Label } from "@/shared/components/ui";
import { Input } from "@/shared/components/ui/input";
import React from "react";
import { FaDiscord, FaGithub, FaGoogle } from "react-icons/fa";
import authBackground from "@/shared/assets/images/backgrounds/auth-background.jpg";
import { Link } from "react-router-dom";

export const SignInPage: React.FC = () => {
    return (
        <div className="w-screen h-screen flex items-center justify-center overflow-hidden">
            <div className="w-[50vw]">
                <img src={authBackground} alt="" />
            </div>
            <div className="w-[50vw] flex items-center justify-center">
                <Card className="w-full max-w-sm">
                    <CardHeader>
                        <CardTitle className="text-center text-lg">Sign in on AskUs!</CardTitle>
                        <CardDescription className="text-center">Enter your email and password below to login</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form>
                            <div className="flex flex-col gap-6">
                                <div className="grid gap-2">
                                    <Label htmlFor="email">Email</Label>
                                    <Input id="email" type="email" placeholder="m@example.com" required />
                                </div>
                                <div className="grid gap-2">
                                    <div className="flex items-center">
                                        <Label htmlFor="password">Password</Label>
                                        <a href="#" className="ml-auto inline-block text-sm underline-offset-4 hover:underline">
                                            Forgot your password?
                                        </a>
                                    </div>
                                    <Input id="password" type="password" required />
                                </div>
                            </div>
                        </form>
                    </CardContent>
                    <CardFooter className="flex-col gap-4">
                        <Button type="submit" className="w-full">
                            Sign in
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
            <Link to="/sign-up" className="underline absolute top-10 right-10 text-primary text-lg">
                Sign up
            </Link>
        </div>
    );
};
