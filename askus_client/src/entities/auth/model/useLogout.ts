import { useMutation } from "@tanstack/react-query";
import { authApi } from "../api/auth.api";
import { useNavigate } from "react-router-dom";
import { queryClient } from "@/app/providers/query-client";
import type { IErrorResponse } from "@/shared/types/error-response.type";
import { toast } from "react-toastify";

export const useLogout = () => {
    const navigate = useNavigate();

    const logoutMutation = useMutation({
        mutationFn: authApi.logout,
        onSuccess() {
            navigate("/");
            queryClient.invalidateQueries();
        },
        onError: (error: IErrorResponse) => {
            toast.error(error.response.data.message);
        },
    });

    return {
        logoutFunc: logoutMutation.mutate,
    };
};
