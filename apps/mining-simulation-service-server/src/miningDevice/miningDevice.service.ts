import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { MiningDeviceServiceBase } from "./base/miningDevice.service.base";

@Injectable()
export class MiningDeviceService extends MiningDeviceServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
