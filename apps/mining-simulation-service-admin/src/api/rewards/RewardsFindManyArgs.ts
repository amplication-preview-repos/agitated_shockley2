import { RewardsWhereInput } from "./RewardsWhereInput";
import { RewardsOrderByInput } from "./RewardsOrderByInput";

export type RewardsFindManyArgs = {
  where?: RewardsWhereInput;
  orderBy?: Array<RewardsOrderByInput>;
  skip?: number;
  take?: number;
};
