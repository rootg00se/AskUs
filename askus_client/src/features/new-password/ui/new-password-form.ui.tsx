import { Label } from "@/shared/components/ui";
import { Input } from "@/shared/components/ui/input";
import React from "react";

export const NewPasswordForm: React.FC = () => {
    return (
        <form>
            <div className="flex flex-col gap-6">
                <div className="grid gap-2">
                    <Label htmlFor="password">Password</Label>
                    <Input id="password" type="password" required />
                </div>
                <div className="grid gap-2">
                    <Label htmlFor="passwordRepeat">Repeat Password</Label>
                    <Input id="passwordRepeat" type="password" required />
                </div>
            </div>
        </form>
    );
};
