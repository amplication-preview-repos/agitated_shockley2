/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { MiningSession } from "./MiningSession";
import { MiningSessionCountArgs } from "./MiningSessionCountArgs";
import { MiningSessionFindManyArgs } from "./MiningSessionFindManyArgs";
import { MiningSessionFindUniqueArgs } from "./MiningSessionFindUniqueArgs";
import { DeleteMiningSessionArgs } from "./DeleteMiningSessionArgs";
import { MiningSessionService } from "../miningSession.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => MiningSession)
export class MiningSessionResolverBase {
  constructor(
    protected readonly service: MiningSessionService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "MiningSession",
    action: "read",
    possession: "any",
  })
  async _miningSessionsMeta(
    @graphql.Args() args: MiningSessionCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [MiningSession])
  @nestAccessControl.UseRoles({
    resource: "MiningSession",
    action: "read",
    possession: "any",
  })
  async miningSessions(
    @graphql.Args() args: MiningSessionFindManyArgs
  ): Promise<MiningSession[]> {
    return this.service.miningSessions(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => MiningSession, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "MiningSession",
    action: "read",
    possession: "own",
  })
  async miningSession(
    @graphql.Args() args: MiningSessionFindUniqueArgs
  ): Promise<MiningSession | null> {
    const result = await this.service.miningSession(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => MiningSession)
  @nestAccessControl.UseRoles({
    resource: "MiningSession",
    action: "delete",
    possession: "any",
  })
  async deleteMiningSession(
    @graphql.Args() args: DeleteMiningSessionArgs
  ): Promise<MiningSession | null> {
    try {
      return await this.service.deleteMiningSession(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}