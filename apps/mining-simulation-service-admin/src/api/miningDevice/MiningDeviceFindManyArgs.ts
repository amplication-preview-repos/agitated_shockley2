import { MiningDeviceWhereInput } from "./MiningDeviceWhereInput";
import { MiningDeviceOrderByInput } from "./MiningDeviceOrderByInput";

export type MiningDeviceFindManyArgs = {
  where?: MiningDeviceWhereInput;
  orderBy?: Array<MiningDeviceOrderByInput>;
  skip?: number;
  take?: number;
};
