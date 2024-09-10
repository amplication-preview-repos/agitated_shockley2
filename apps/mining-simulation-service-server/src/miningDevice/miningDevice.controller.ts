import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { MiningDeviceService } from "./miningDevice.service";
import { MiningDeviceControllerBase } from "./base/miningDevice.controller.base";

@swagger.ApiTags("miningDevices")
@common.Controller("miningDevices")
export class MiningDeviceController extends MiningDeviceControllerBase {
  constructor(
    protected readonly service: MiningDeviceService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
