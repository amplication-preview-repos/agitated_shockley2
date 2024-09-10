import { Rewards as TRewards } from "../api/rewards/Rewards";

export const REWARDS_TITLE_FIELD = "id";

export const RewardsTitle = (record: TRewards): string => {
  return record.id?.toString() || String(record.id);
};
