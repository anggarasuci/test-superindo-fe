import { BaseDapilEntity } from "./base-dapil-entity";
import { BaseEntity } from "./base-entity";
import { RegencyEntity } from "./location-entity";
import { PartyEntity } from "./party-entity";

export interface MapResultEntity {
  data: MapResultRegionEntity[];
  period: string;
  type: string;
  grandTotal: number;
  mapType?: "city" | "province";
}

export interface MapResultRegionEntity {
  provinceCode?: string | "";
  regencyCode?: string | "";
  winner: MapResultPartyEntity;
  parties: MapResultPartyEntity[];
  total: number;
}
export interface MapResultPartyEntity {
  party: PartyEntity;
  total: number;
  percent: string | "";
}
export interface MapResultDapilRegionEntity {
  dapil: BaseDapilEntity;
  regencies: MapResultDapilRegencyEntity[];
  winner: MapResultDapilPartyEntity;
}
export interface MapResultDapilRegencyEntity extends MapResultDapilPartyEntity {
  regency: RegencyEntity;
  partyMember?: MapResultPartyMemberEntity | null;
}
export interface MapResultDapilPartyEntity {
  party: PartyEntity;
  total_suara: number;
  total_kursi?: number | 0;
}

export interface MapResultPartyMemberEntity {
  parties: PartyEntity[],
  total_suara: number[];
}
