import { provider_type } from "@prisma/generated"

export type ValidateOAuthUserType = {
    email: string, 
    displayName: string,
    accessToken: string, 
    avatarUrl: string | null,
    refreshToken: string,
    providerType: provider_type,
    profileId: string
}