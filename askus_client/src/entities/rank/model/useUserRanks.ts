import { useQuery } from "@tanstack/react-query";
import { ranksApi } from "../api/ranks.api";

export const useUserRanks = (userId: string) => {
    const { data, isPending } = useQuery({
        queryKey: [ranksApi.baseKey, userId],
        queryFn: () => ranksApi.getUserRanks(userId),
        select: (data) => data.data,
    });

    return {
        userRanksData: data,
        isUserRanksPending: isPending,
    };
};
