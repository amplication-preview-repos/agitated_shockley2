import { Module } from "@nestjs/common";
import { MiningSimulationService } from "./miningsimulation.service";
import { MiningSimulationController } from "./miningsimulation.controller";
import { MiningSimulationResolver } from "./miningsimulation.resolver";

@Module({
  controllers: [MiningSimulationController],
  providers: [MiningSimulationService, MiningSimulationResolver],
  exports: [MiningSimulationService],
})
export class MiningSimulationModule {}
