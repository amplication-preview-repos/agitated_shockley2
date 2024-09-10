import { UserStats as TUserStats } from "../api/userStats/UserStats";

export const USERSTATS_TITLE_FIELD = "id";

export const UserStatsTitle = (record: TUserStats): string => {
  return record.id?.toString() || String(record.id);
};
