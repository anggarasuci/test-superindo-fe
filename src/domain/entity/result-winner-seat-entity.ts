import { BaseEntity } from "./base-entity";
import { CandidateEntity } from "./candidate-entity";
import { DapilEntity } from "./dapil-entity";
import { ResultWinnerEntity } from "./result-winner-entity";

export interface ResultWinnerSeatEntity {
  type: string;
  period: string;
  provinces: ResultWinnerSeatProvinceEntity[];
}

export interface ResultWinnerSeatProvinceEntity {
  province: BaseEntity;
  dapils: ResultWinnerSeatDapilEntity[];
}

export interface ResultWinnerSeatDapilEntity {
  dapil: DapilEntity; //DapilSeatEntity;
  candidates: CandidateEntity[];
  saint_laguages?: number[];
  total_suara: number[];
  rank: number[];
  winner: boolean[];
}

export interface DapilSeatEntity extends BaseEntity {
  period: number;
  total_dpt: number;
  total_kursi: number;
  total_pengguna_hak_pilih: number;
  total_sah: number;
  total_tidak_sah: number;
  type: number;
}

export interface CandidateSeatEntity extends CandidateEntity {
  sequence: number;
  total_suara: number;
  total_suara_saint_lague: number;
}

export interface ResultWinnerSeatByPartyEntity {
  type: string;
  period: string;
  total_winner: number;
  total_potential: number;
  total_tracehold: number;
  data: WinnerSeatPartyEntity[];
}

export interface WinnerSeatPartyEntity extends ResultWinnerEntity {
  status: "winner" | "potential" | "tracehold" | "lose";
}
