import { CacheManagerOptions } from "@nestjs/cache-manager";
import { ConfigService } from "@nestjs/config";
import Keyv from 'keyv';
import KeyvRedis from '@keyv/redis';

export const keyvRedisConfig = async (
    configService: ConfigService,
): Promise<CacheManagerOptions> => ({
    stores: [
        new Keyv({
            store: new KeyvRedis(configService.getOrThrow("REDIS_URI")),
            namespace: "cache",
            ttl: 1000 * 60 * 60,
        }),
    ],
});