import { Sort } from "./base-dapil-entity";
import { BaseEntity } from "./base-entity";
import { ResultCandidateScoreEntity } from "./result-candidate-score-entity";

export interface ResultScoreEntity {
  period: BaseEntity;
  type: BaseEntity;
  dapil: ScoreDapilEntity;
  total_score: number;
  total_suara: number;
  total_survey: number;
  total_kursi: number;
}

export interface ScoreDapilEntity {
  id: number;
  name: string;
  period: string;
  type: string;
  total_dpt: number;
  total_pengguna_hak_pilih: number;
  total_sah: number;
  total_tidak_sah: number;
  total_kursi: number;
  province: BaseEntity;
  indeks_value?: string;
  struktur_dprt?: string;
  target_kursi: number;
}

export interface DrillDownCandidateScore {
  dapilId: number;
  expanded: boolean;
  sort: Sort;
  data?: ResultCandidateScoreEntity[];
}

export interface AdditionalFieldScoreEntity {
  dapilId: number;
  dapil: string;
  province: string;
  dprt: string;
  indeksValue: string;
  target: string;
}
