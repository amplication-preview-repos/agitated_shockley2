import { MiningSessionWhereInput } from "./MiningSessionWhereInput";
import { MiningSessionOrderByInput } from "./MiningSessionOrderByInput";

export type MiningSessionFindManyArgs = {
  where?: MiningSessionWhereInput;
  orderBy?: Array<MiningSessionOrderByInput>;
  skip?: number;
  take?: number;
};
