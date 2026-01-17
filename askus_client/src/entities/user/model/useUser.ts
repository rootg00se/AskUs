import { useQuery } from "@tanstack/react-query"
import { userApi } from "../api/user.api"

export const useUser = () => {
    const { data, isPending } = useQuery({
        queryKey: [userApi.baseKey, "info"],
        queryFn: userApi.getInfo,
        select: data => data.data,
        retry: false,
    });

    return {
        userData: data,
        userIsPending: isPending
    }
}