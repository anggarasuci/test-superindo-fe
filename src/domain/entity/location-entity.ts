import { BaseEntity } from "./base-entity";

export interface LocationEntity extends BaseEntity {
}

export interface RequestLocationEntity extends BaseEntity {
  village?: string | "",
  district?: string | "",
  regency?: string | "",
  province?: string | ""
}

export interface TPSEntity extends BaseEntity {
  village: VillageEntity;
}

export interface VillageEntity extends BaseEntity {
  district: DistrictEntity;
}

export interface DistrictEntity extends BaseEntity {
  regency: RegencyEntity;
}

export interface RegencyEntity extends BaseEntity {
  province: ProvinceEntity;
}
export interface ProvinceEntity extends BaseEntity {}
