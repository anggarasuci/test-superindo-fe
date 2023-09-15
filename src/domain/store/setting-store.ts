import { DapilEntity } from "../entity/dapil-entity";
import { MapResultEntity } from "../entity/map-result-entity";
import { ResponseEntity } from "../entity/response-entity";

interface SettingStore {
  applicationName: string;
  isLoading: boolean | false;
  globalPeriodId: number;
  globalTypeId: number;
  defaultChartType: string;
  mapResultsAllType: MapResultEntity[];
  globalDapils: [DapilEntity];

  setApplicationName(applicationName: string): void;
  setGlobalPeriodId(globalPeriodId: number): void;
  setGlobalTypeId(globalTypeId: number): void;
  setDefaultChartType(defaultChartType: string): void;
  setMapResultAllType(mapResultsAllType: MapResultEntity): void;
  setLoading(isLoading: boolean): void;
  removeItemMapResultAllType(period: string, type: string): void;
  getGlobalDapils(
    name?: string,
    province?: string,
    type?: string,
    period?: string,
  ): Promise<ResponseEntity<[DapilEntity]>>;
}

export type { SettingStore };