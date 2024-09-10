import { MiningDevice as TMiningDevice } from "../api/miningDevice/MiningDevice";

export const MININGDEVICE_TITLE_FIELD = "id";

export const MiningDeviceTitle = (record: TMiningDevice): string => {
  return record.id?.toString() || String(record.id);
};
