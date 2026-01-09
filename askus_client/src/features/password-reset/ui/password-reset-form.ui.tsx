import { Label } from "@/shared/components/ui";
import { Input } from "@/shared/components/ui/input";
import React from "react";

export const PasswordResetForm: React.FC = () => {
    return (
        <form>
            <div className="flex flex-col gap-6">
                <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="m@example.com" required />
                </div>
            </div>
        </form>
    );
};
