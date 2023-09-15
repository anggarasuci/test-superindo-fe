import { BaseEntity } from "./base-entity";

export interface BaseDapilEntity extends BaseEntity {
  total_dpt: number;
  total_pengguna_hak_pilih: number;
  total_sah: number;
  total_tidak_sah: number;
  total_kursi: number;
}

export interface Sort {
  name: string;
  orderBy: "asc" | "desc";
}

export interface RequestAdditionalField {
  name: string;
  province: string;
  id: number;
  period: number;
  type: number;
  struktur_dprt: string;
  indeks_value: string;
  target_kursi: string;
}
