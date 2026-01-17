import { useMutation } from "@tanstack/react-query";
import { authApi } from "../api/auth.api";
import type { IErrorResponse } from "@/shared/types/error-response.type";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { queryClient } from "@/app/providers/query-client";

export const useTwoFactor = () => {
    const navigate = useNavigate();

    const twoFactorMutation = useMutation({
        mutationFn: authApi.twoFactorAuth,
        onSuccess() {
            queryClient.invalidateQueries({ queryKey: ["users"] });

            navigate("/");
        },
        onError: (error: IErrorResponse) => {
            toast.error(error.response.data.message);
        },
    });

    return {
        twoFactorFunc: twoFactorMutation.mutate,
        twoFactorPending: twoFactorMutation.isPending,
    };
};
