import { BaseDapilEntity } from "./base-dapil-entity";
import { BaseEntity } from "./base-entity";
import { CandidateEntity } from "./candidate-entity";
import {
  DistrictEntity,
  ProvinceEntity,
  RegencyEntity,
  TPSEntity,
  VillageEntity,
} from "./location-entity";
import { PartyEntity } from "./party-entity";

export interface ResultDapilRegionEntity {
  candidate?: CandidateEntity | null;
  dapil: ResultDapilEntity;
  period: string;
  type: string;
  party: PartyEntity;
  total_suara: number;
}

export interface ResultDapilEntity {
  id: string;
  dapil: BaseDapilEntity;
  province: ProvinceEntity;
  regency: RegencyEntity;
  district: DistrictEntity;
  village: VillageEntity;
  tps: TPSEntity;
  total_dpt: number;
  total_pengguna_hak_pilih: number;
  total_sah: number;
  total_tidak_sah: number;
  total_kursi: number;
}
