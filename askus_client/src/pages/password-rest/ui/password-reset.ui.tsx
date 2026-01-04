import { Button, Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, Label } from "@/shared/components/ui";
import { Input } from "@/shared/components/ui/input";
import React from "react";
import authBackground from "@/shared/assets/images/backgrounds/auth-background.jpg";

export const PasswordResetPage: React.FC = () => {
    return (
        <div className="w-screen h-screen flex items-center justify-center overflow-hidden">
            <div className="w-[50vw]">
                <img src={authBackground} alt="" />
            </div>
            <div className="w-[50vw] flex items-center justify-center">
                <Card className="w-full max-w-sm">
                    <CardHeader>
                        <CardTitle className="text-center text-lg">Reset password</CardTitle>
                        <CardDescription className="text-center">Enter your email and get link to reset your password on email</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form>
                            <div className="flex flex-col gap-6">
                                <div className="grid gap-2">
                                    <Label htmlFor="email">Email</Label>
                                    <Input id="email" type="email" placeholder="m@example.com" required />
                                </div>
                            </div>
                        </form>
                    </CardContent>
                    <CardFooter className="flex-col gap-4">
                        <Button type="submit" className="w-full">
                            Reset Password
                        </Button>
                    </CardFooter>
                </Card>
            </div>
        </div>
    );
};
