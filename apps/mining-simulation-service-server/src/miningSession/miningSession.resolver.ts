import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { MiningSessionResolverBase } from "./base/miningSession.resolver.base";
import { MiningSession } from "./base/MiningSession";
import { MiningSessionService } from "./miningSession.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => MiningSession)
export class MiningSessionResolver extends MiningSessionResolverBase {
  constructor(
    protected readonly service: MiningSessionService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
