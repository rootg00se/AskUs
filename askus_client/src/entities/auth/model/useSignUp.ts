import { useMutation } from "@tanstack/react-query"
import { authApi } from "../api/auth.api"
import { useNavigate } from "react-router-dom"
import type { IErrorResponse } from "@/shared/types/error-response.type";
import { toast } from "react-toastify";
import type { SignUpDto } from "./types";

export const useSignUp = () => {
    const navigate = useNavigate();

    const signUpMutation = useMutation({
        mutationFn: ({ data, recaptcha }: {
            data: SignUpDto,
            recaptcha: string
        }) => authApi.signUp(data, recaptcha),
        onSuccess() {
            navigate("/verify")
        },
        onError: (error: IErrorResponse) => {
            toast.error(error.response.data.message);
        }
    })

    return {
        singUpFunc: signUpMutation.mutate,
        isSignUpPending: signUpMutation.isPending
    }
}