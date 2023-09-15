import { SettingService } from "src/data/service/setting-service";
import { mapResponse } from "src/helpers/map-response";
import { DapilEntity } from "../entity/dapil-entity";
import { ResponseEntity } from "../entity/response-entity";

const getGlobalDapils = async (
  name?: string,
  province?: string,
  type?: string,
  period?: string
): Promise<ResponseEntity<[DapilEntity]>> => {
  return mapResponse(await SettingService.getGlobalDapils(name, province, type, period));
};

export const SettingRepository = {
  getGlobalDapils
};
