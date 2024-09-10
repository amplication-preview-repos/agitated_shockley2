import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { UserStatsModuleBase } from "./base/userStats.module.base";
import { UserStatsService } from "./userStats.service";
import { UserStatsController } from "./userStats.controller";
import { UserStatsResolver } from "./userStats.resolver";

@Module({
  imports: [UserStatsModuleBase, forwardRef(() => AuthModule)],
  controllers: [UserStatsController],
  providers: [UserStatsService, UserStatsResolver],
  exports: [UserStatsService],
})
export class UserStatsModule {}
