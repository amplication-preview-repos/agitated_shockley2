import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { MiningSessionModuleBase } from "./base/miningSession.module.base";
import { MiningSessionService } from "./miningSession.service";
import { MiningSessionController } from "./miningSession.controller";
import { MiningSessionResolver } from "./miningSession.resolver";

@Module({
  imports: [MiningSessionModuleBase, forwardRef(() => AuthModule)],
  controllers: [MiningSessionController],
  providers: [MiningSessionService, MiningSessionResolver],
  exports: [MiningSessionService],
})
export class MiningSessionModule {}
