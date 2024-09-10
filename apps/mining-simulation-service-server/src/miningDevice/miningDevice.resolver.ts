import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { MiningDeviceResolverBase } from "./base/miningDevice.resolver.base";
import { MiningDevice } from "./base/MiningDevice";
import { MiningDeviceService } from "./miningDevice.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => MiningDevice)
export class MiningDeviceResolver extends MiningDeviceResolverBase {
  constructor(
    protected readonly service: MiningDeviceService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
