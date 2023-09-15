import {
  DistrictEntity,
  LocationEntity,
  ProvinceEntity,
  RegencyEntity,
  RequestLocationEntity,
  TPSEntity,
  VillageEntity,
} from "../entity/location-entity";
import { ResponseEntity } from "../entity/response-entity";
import { BaseStore } from "./base-store";

interface LocationStore extends BaseStore {
  provinces: [ProvinceEntity];
  provinceById: ProvinceEntity;
  regencies: [RegencyEntity];
  regencyById: RegencyEntity;
  districts: [DistrictEntity];
  districtById: DistrictEntity;
  villages: [VillageEntity];
  villageById: VillageEntity;
  tps: [TPSEntity];
  tpsById: TPSEntity;

  provincesModal: [ProvinceEntity];
  provinceByIdModal: ProvinceEntity;
  regenciesModal: [RegencyEntity];
  regencyByIdModal: RegencyEntity;
  districtsModal: [DistrictEntity];
  districtByIdModal: DistrictEntity;
  villagesModal: [VillageEntity];
  villageByIdModal: VillageEntity;

  // Actions
  getLocations(
    locationTypeKey: string,
    value?: string,
    withReference?: boolean | false,
    referenceValue?: string,
    isFromModal?: boolean | false
  ): Promise<ResponseEntity<[any]>>;

  submit(
    locationTypeKey: string,
    isEdit: boolean,
    request: RequestLocationEntity
  ): Promise<ResponseEntity<any>>;

  remove(
    locationTypeKey: string,
    id: string
  ): Promise<ResponseEntity<LocationEntity>>;

  selectLocation(
    locationTypeKey: string,
    valid: string,
    isFromModal?: boolean | false
  ): void;
}

export type { LocationStore };
