import { useMutation } from "@tanstack/react-query"
import { authApi } from "../api/auth.api"
import type { IErrorResponse } from "@/shared/types/error-response.type";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import type { ITwoFactorResponse } from "./types";

export const useSignIn = () => {
    const navigate = useNavigate();

    const signInMutation = useMutation({
        mutationFn: authApi.signIn,
        onSuccess(data) {
            if ((data.data as ITwoFactorResponse).data.twoFactorRequired) {
                navigate("/2fa")
            } else {
                navigate("/")
            }
        },
        onError: (error: IErrorResponse) => {
            toast.error(error.response.data.message);
        }
    })

    return {
        signInFunc: signInMutation.mutate,
        isSignInPending: signInMutation.isPending
    }
}