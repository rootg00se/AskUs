import { $api } from "@/shared/api/api";
import { type IUserResponse } from "../model/types";
import { USER_ENDPOINTS } from "../lib/constants";

export const userApi = {
    baseKey: "users",
    getInfo: async () => {
        return await $api.get<IUserResponse>(USER_ENDPOINTS.GET_INFO);
    },
};
