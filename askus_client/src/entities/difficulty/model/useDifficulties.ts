import { useQuery } from "@tanstack/react-query";
import { difficultiesApi } from "../api/difficulties.api";

export const useDifficulties = () => {
    const { data, isPending } = useQuery({
        queryKey: [difficultiesApi.baseKey],
        queryFn: difficultiesApi.getAllDificulties,
        select: (data) => data.data,
    });

    return {
        difficultiesData: data,
        isDifficultiesPending: isPending,
    };
};
