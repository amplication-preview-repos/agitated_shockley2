import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { RewardsService } from "./rewards.service";
import { RewardsControllerBase } from "./base/rewards.controller.base";

@swagger.ApiTags("rewards")
@common.Controller("rewards")
export class RewardsController extends RewardsControllerBase {
  constructor(
    protected readonly service: RewardsService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
