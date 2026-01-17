import { useMutation } from "@tanstack/react-query";
import { authApi } from "../api/auth.api";
import type { IErrorResponse } from "@/shared/types/error-response.type";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import type { ITwoFactorResponse, SignInDto } from "./types";
import { queryClient } from "@/app/providers/query-client";

export const useSignIn = () => {
    const navigate = useNavigate();

    const signInMutation = useMutation({
        mutationFn: ({ data, recaptcha }: { 
            data: SignInDto; 
            recaptcha: string 
        }) => authApi.signIn(data, recaptcha),
        onSuccess(data) {
            queryClient.invalidateQueries({ queryKey: ["users"] });

            if ((data.data as ITwoFactorResponse).data.twoFactorRequired) {
                navigate("/2fa");
            } else {
                navigate("/");
            }
        },
        onError: (error: IErrorResponse) => {
            toast.error(error.response.data.message);
        },
    });

    return {
        signInFunc: signInMutation.mutate,
        isSignInPending: signInMutation.isPending,
    };
};
