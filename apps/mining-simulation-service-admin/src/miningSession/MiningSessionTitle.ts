import { MiningSession as TMiningSession } from "../api/miningSession/MiningSession";

export const MININGSESSION_TITLE_FIELD = "id";

export const MiningSessionTitle = (record: TMiningSession): string => {
  return record.id?.toString() || String(record.id);
};
