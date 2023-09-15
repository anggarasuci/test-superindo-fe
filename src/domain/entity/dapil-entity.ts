import { BaseDapilEntity } from "./base-dapil-entity";
import { DistrictEntity, ProvinceEntity, RegencyEntity, TPSEntity, VillageEntity } from "./location-entity";
import { PeriodEntity } from "./period-entity";
import { TypeEntity } from "./type-entity";


export interface DapilEntity {
  id: any;
  name: string;
  dapil?: BaseDapilEntity;
  period?: PeriodEntity;
  type?: TypeEntity;
  province?: ProvinceEntity;
  regency?: RegencyEntity;
  district?: DistrictEntity;
  village?: VillageEntity;
  tps?: TPSEntity;
  jumlah_total_dpt?: number;
  jumlah_pengguna_hak_pilih?: number;
  jumlah_suara_sah?: number;
  jumlah_suara_tidak_sah?: number;
  total_kursi?: number;

  total_dpt?: number;
  total_pengguna_hak_pilih?: number;
  total_sah?: number;
  total_tidak_sah?: number;
}

export interface RequestDapilEntity {
    id: number;
    name: string;
    period: number;
    type: number;
    province: number;
    regency: number;
    district: number;
    village: number;
    tps: number;
    jumlah_total_dpt: number;
    jumlah_pengguna_hak_pilih: number;
    jumlah_suara_sah: number;
    jumlah_suara_tidak_sah: number;
}
