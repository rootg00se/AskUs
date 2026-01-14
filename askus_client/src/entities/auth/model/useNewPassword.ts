import { useMutation } from "@tanstack/react-query";
import { authApi } from "../api/auth.api";
import type { IErrorResponse } from "@/shared/types/error-response.type";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const useNewPassword = () => {
    const navigate = useNavigate();

    const newPasswordMutation = useMutation({
        mutationFn: authApi.newPassword,
        onSuccess() {
            navigate("/");
        },
        onError: (error: IErrorResponse) => {
            toast.error(error.response.data.message);
        },
    });

    return {
        newPasswordFunc: newPasswordMutation.mutate,
        isNewPasswordPenfing: newPasswordMutation.isPending,
    };
};
