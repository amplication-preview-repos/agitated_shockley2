import { UserStatsWhereInput } from "./UserStatsWhereInput";
import { UserStatsOrderByInput } from "./UserStatsOrderByInput";

export type UserStatsFindManyArgs = {
  where?: UserStatsWhereInput;
  orderBy?: Array<UserStatsOrderByInput>;
  skip?: number;
  take?: number;
};
