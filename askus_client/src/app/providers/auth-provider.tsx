import { useUser } from "@/entities/user";

export const AuthProvier: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const { userIsPending } = useUser();

    if (userIsPending) return null;

    return children;
};
