import { $api } from "@/shared/api/api";
import { type IAuthResponse, type ITwoFactorResponse, type SignInDto, type SignUpDto } from "../model/types";
import { AUTH_ENDPOINTS } from "../lib/constants";

export const authApi = {
    baseKey: "auth",
    signUp: async (data: SignUpDto, recaptcha: string) => {
        return $api.post<IAuthResponse>(AUTH_ENDPOINTS.SIGN_UP, data, { headers: { recaptcha } });
    },
    signIn: async (data: SignInDto, recaptcha: string) => {
        return $api.post<ITwoFactorResponse | IAuthResponse>(AUTH_ENDPOINTS.SIGN_IN, data, { headers: { recaptcha } });
    },
    resetPassword: async (data: { email: string }) => {
        return $api.post(AUTH_ENDPOINTS.RESET_PASSWORD, data);
    },
    newPassword: async (data: { password: string; token: string }) => {
        return $api.post<IAuthResponse>(`${AUTH_ENDPOINTS.NEW_PASSWORD}?token=${data.token}`, { password: data.password });
    },
    twoFactorAuth: async (data: { code: string }) => {
        return $api.post<IAuthResponse>(`${AUTH_ENDPOINTS.TWO_FACTOR_AUTH}`, data);
    },
    logout: async () => {
        return $api.post<void>(`${AUTH_ENDPOINTS.LOGOUT}`);
    }
};
