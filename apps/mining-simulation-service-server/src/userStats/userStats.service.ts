import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { UserStatsServiceBase } from "./base/userStats.service.base";

@Injectable()
export class UserStatsService extends UserStatsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
