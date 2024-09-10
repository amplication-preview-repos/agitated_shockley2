import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { RewardsModuleBase } from "./base/rewards.module.base";
import { RewardsService } from "./rewards.service";
import { RewardsController } from "./rewards.controller";
import { RewardsResolver } from "./rewards.resolver";

@Module({
  imports: [RewardsModuleBase, forwardRef(() => AuthModule)],
  controllers: [RewardsController],
  providers: [RewardsService, RewardsResolver],
  exports: [RewardsService],
})
export class RewardsModule {}
