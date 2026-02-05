import { useUpdateNickname } from "@/entities/user";
import { Button } from "@/shared/components/ui";
import { Input } from "@/shared/components/ui/input";
import React, { useState } from "react";

export const UpdateNickname: React.FC<{ displayName: string }> = ({ displayName }) => {
    const [nickname, setNickname] = useState("");
    const { updateNicknameFunc, isUpdateNicknamePending } = useUpdateNickname();

    return (
        <div className="flex items-center gap-2 mb-2">
            <Input defaultValue={displayName} onChange={(e) => setNickname(e.target.value)} className="w-full max-w-60" />
            <Button disabled={isUpdateNicknamePending} onClick={() => updateNicknameFunc(nickname)}>
                Save
            </Button>
        </div>
    );
};
