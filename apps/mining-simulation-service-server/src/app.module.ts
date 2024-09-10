import { RedisModule } from "./redis/redis.module";
import { Module } from "@nestjs/common";
import { UserModule } from "./user/user.module";
import { MiningDeviceModule } from "./miningDevice/miningDevice.module";
import { CurrencyModule } from "./currency/currency.module";
import { GameModule } from "./game/game.module";
import { TransactionModule } from "./transaction/transaction.module";
import { RewardsModule } from "./rewards/rewards.module";
import { UserStatsModule } from "./userStats/userStats.module";
import { MiningSessionModule } from "./miningSession/miningSession.module";
import { MiningSimulationModule } from "./miningsimulation/miningsimulation.module";
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";

import { ACLModule } from "./auth/acl.module";
import { AuthModule } from "./auth/auth.module";

@Module({
  controllers: [],
  imports: [
    ACLModule,
    AuthModule,
    UserModule,
    MiningDeviceModule,
    CurrencyModule,
    GameModule,
    TransactionModule,
    RewardsModule,
    UserStatsModule,
    MiningSessionModule,
    MiningSimulationModule,
    HealthModule,
    PrismaModule,
    SecretsManagerModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: (configService: ConfigService) => {
        const playground = configService.get("GRAPHQL_PLAYGROUND");
        const introspection = configService.get("GRAPHQL_INTROSPECTION");
        return {
          autoSchemaFile: "schema.graphql",
          sortSchema: true,
          playground,
          introspection: playground || introspection,
        };
      },
      inject: [ConfigService],
      imports: [ConfigModule],
    }),
    RedisModule,
  ],
  providers: [],
})
export class AppModule {}
