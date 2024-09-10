import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { UserStatsService } from "./userStats.service";
import { UserStatsControllerBase } from "./base/userStats.controller.base";

@swagger.ApiTags("userStats")
@common.Controller("userStats")
export class UserStatsController extends UserStatsControllerBase {
  constructor(
    protected readonly service: UserStatsService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
