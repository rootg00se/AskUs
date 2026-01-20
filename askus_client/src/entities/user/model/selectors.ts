import { useUser } from "./useUser";

export const isAuthenticated = (): boolean => {
    const { userData, userIsPending } = useUser();
    if (userIsPending) return false;

    return !!userData;
};

export const isActivated = (): boolean => {
    const { userData, userIsPending } = useUser();
    if (userIsPending) return false;

    return !!userData?.is_verified;
};

export const userId = () => {
    const { userData, userIsPending } = useUser();
    if (userIsPending) return false;

    return userData?.user_id;
};
