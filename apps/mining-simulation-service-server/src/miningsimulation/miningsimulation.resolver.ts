import * as graphql from "@nestjs/graphql";
import { MiningSimulationService } from "./miningsimulation.service";

export class MiningSimulationResolver {
  constructor(protected readonly service: MiningSimulationService) {}
}
