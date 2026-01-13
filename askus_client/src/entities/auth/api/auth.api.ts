import { $api } from "@/shared/api/api";
import { type IAuthResponse, type SignUpDto } from "../model/types";
import { AUTH_ENDPOINTS } from "../lib/constants";

export const authApi = {
    baseKey: "auth",
    signUp: async (data: SignUpDto) => {
        return $api.post<IAuthResponse>(AUTH_ENDPOINTS.SIGN_UP ,data);
    },
    signIn: async (data: { email: string, password: string }) => {
        return $api.post<IAuthResponse>(AUTH_ENDPOINTS.SIGN_IN, data);
    }
}