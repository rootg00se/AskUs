import { useMutation } from "@tanstack/react-query"
import { authApi } from "../api/auth.api"
import type { IErrorResponse } from "@/shared/types/error-response.type";
import { toast } from "react-toastify";

export const useResetPassword = () => {
    const resetPasswordMutation = useMutation({
        mutationFn: authApi.resetPassword,
        onSuccess() {
            toast.info("Reset link was sent to your email!")
        },
        onError: (error: IErrorResponse) => {
            toast.error(error.response.data.message);
        }
    })

    return {
        resetPasswordFunc: resetPasswordMutation.mutate,
        isResetPasswordPenging: resetPasswordMutation.isPending
    }
}