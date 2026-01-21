import { $api } from "@/shared/api/api"
import { DIFFICULTIES_ENDPOINT } from "../lib/constants"
import type { IDifficultyResponse } from "../model/types";

export const difficultiesApi = {
    baseKey: "difficulties",
    getAllDificulties: () => {
        return $api.get<IDifficultyResponse[]>(DIFFICULTIES_ENDPOINT);
    }
}