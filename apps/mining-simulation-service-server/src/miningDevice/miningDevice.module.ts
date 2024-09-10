import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { MiningDeviceModuleBase } from "./base/miningDevice.module.base";
import { MiningDeviceService } from "./miningDevice.service";
import { MiningDeviceController } from "./miningDevice.controller";
import { MiningDeviceResolver } from "./miningDevice.resolver";

@Module({
  imports: [MiningDeviceModuleBase, forwardRef(() => AuthModule)],
  controllers: [MiningDeviceController],
  providers: [MiningDeviceService, MiningDeviceResolver],
  exports: [MiningDeviceService],
})
export class MiningDeviceModule {}
