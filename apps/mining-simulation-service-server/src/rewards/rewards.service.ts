import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { RewardsServiceBase } from "./base/rewards.service.base";

@Injectable()
export class RewardsService extends RewardsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
