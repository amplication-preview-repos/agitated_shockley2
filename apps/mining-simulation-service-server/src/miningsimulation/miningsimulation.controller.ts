import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { MiningSimulationService } from "./miningsimulation.service";

@swagger.ApiTags("miningSimulations")
@common.Controller("miningSimulations")
export class MiningSimulationController {
  constructor(protected readonly service: MiningSimulationService) {}
}
