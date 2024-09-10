import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { MiningSessionServiceBase } from "./base/miningSession.service.base";

@Injectable()
export class MiningSessionService extends MiningSessionServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
