import { useQuery } from "@tanstack/react-query"
import { userApi } from "../api/user.api"

export const useProfile = (userId: string) => {
    const { data, isPending } = useQuery({
        queryKey: [userApi.baseKey, userId],
        queryFn: () => userApi.getProfile(userId),
        select: data => data.data,
    });

    return {
        userProfileData: data,
        isUserProfilePending: isPending
    }
}