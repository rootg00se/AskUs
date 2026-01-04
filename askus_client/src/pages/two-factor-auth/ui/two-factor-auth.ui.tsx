import { Button, Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot } from "@/shared/components/ui";
import React from "react";
import authBackground from "@/shared/assets/images/backgrounds/auth-background.jpg";

export const TwoFactorAuthPage: React.FC = () => {
    return (
        <div className="w-screen h-screen flex items-center justify-center overflow-hidden">
            <div className="w-[50vw]">
                <img src={authBackground} alt="" />
            </div>
            <div className="w-[50vw] flex items-center justify-center">
                <Card className="w-full max-w-sm">
                    <CardHeader>
                        <CardTitle className="text-center text-lg">Two Facto Authentification</CardTitle>
                        <CardDescription className="text-center">Enter 2fa code from your sms to sign in</CardDescription>
                    </CardHeader>
                    <CardContent className="flex justify-center">
                        <InputOTP maxLength={6}>
                            <InputOTPGroup>
                                <InputOTPSlot index={0} />
                                <InputOTPSlot index={1} />
                                <InputOTPSlot index={2} />
                            </InputOTPGroup>
                            <InputOTPSeparator />
                            <InputOTPGroup>
                                <InputOTPSlot index={3} />
                                <InputOTPSlot index={4} />
                                <InputOTPSlot index={5} />
                            </InputOTPGroup>
                        </InputOTP>
                    </CardContent>
                    <CardFooter className="flex-col gap-4">
                        <Button type="submit" className="w-full">
                            Sign in
                        </Button>
                    </CardFooter>
                </Card>
            </div>
        </div>
    );
};
