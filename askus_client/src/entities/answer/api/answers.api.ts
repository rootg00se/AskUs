import { $api } from "@/shared/api/api";
import type { IAnswerResponse } from "../model/types";
import { USER_ANSWERS_ENDPOINT } from "../lib/constants";

export const answersApi = {
    baseKey: "answers",
    getUserAnswers: async (userId: string) => {
        return $api.get<IAnswerResponse[]>(`${USER_ANSWERS_ENDPOINT}/${userId}/answers`);
    }
};
