import { useMutation } from "@tanstack/react-query"
import { authApi } from "../api/auth.api"
import type { IErrorResponse } from "@/shared/types/error-response.type";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const useSignIn = () => {
    const navigate = useNavigate();

    const signInMutation = useMutation({
        mutationFn: authApi.signIn,
        onSuccess() {
            navigate("/")
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