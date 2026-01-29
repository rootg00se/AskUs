import { $api } from "@/shared/api/api";
import { type IUserRanksResponse, type IRankResponse } from "../model/types";
import { RANKS_ENDPOINT, USER_RANKS_ENDPOINT } from "../lib/constants";

export const ranksApi = {
    baseKey: "ranks",
    getAllRanks: () => {
        return $api.get<IRankResponse[]>(RANKS_ENDPOINT);
    },
    getUserRanks: (userId: string) => {
        return $api.get<IUserRanksResponse>(`${USER_RANKS_ENDPOINT}/${userId}/ranks`);
    },
};
