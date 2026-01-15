import React, { useEffect, useState } from "react";
import { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot } from "@/shared/components/ui";
import { useTwoFactor } from "@/entities/auth";

export const TwoFactorAuthForm: React.FC = () => {
    const CODE_LENGTH = 6;

    const [twoFactorValue, setTwoFactorValue] = useState("");
    const { twoFactorFunc } = useTwoFactor();

    useEffect(() => {
        if (twoFactorValue.length === CODE_LENGTH) {
            console.log("req");
            
            twoFactorFunc({ code: twoFactorValue });
        }
    }, [twoFactorValue]);

    return (
        <div className="flex justify-center">
            <InputOTP maxLength={CODE_LENGTH} value={twoFactorValue} onChange={(value) => setTwoFactorValue(value)}>
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
        </div>
    );
};
