import { Label } from "@/shared/components/ui";
import { Input } from "@/shared/components/ui/input";
import React from "react";

export const SignInForm: React.FC = () => {
    return (
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
    );
};
