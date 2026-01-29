import { useQuery } from "@tanstack/react-query";
import { ranksApi } from "../api/ranks.api";

export const useRanks = () => {
    const { data, isPending } = useQuery({
        queryKey: [ranksApi.baseKey],
        queryFn: ranksApi.getAllRanks,
        select: (data) => data.data,
    });

    return {
        ranksData: data,
        isRanksPending: isPending,
    };
};
