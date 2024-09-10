import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { MiningSessionService } from "./miningSession.service";
import { MiningSessionControllerBase } from "./base/miningSession.controller.base";

@swagger.ApiTags("miningSessions")
@common.Controller("miningSessions")
export class MiningSessionController extends MiningSessionControllerBase {
  constructor(
    protected readonly service: MiningSessionService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
