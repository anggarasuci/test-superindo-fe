import { BaseEntity } from "./base-entity";
import { DapilEntity } from "./dapil-entity";

export interface BaseUploadEntity {
  period: string;
  type: string;
}
export interface UploadEntity extends BaseUploadEntity {
  data: UploadDataEntity[];
}
export interface UploadDataEntity {
  id: number;
  province: string | "";
  regency: string | "";
  district: string | "";
  village: string | "";
  tps: string | "";
  dapil: string | "";
  party: string | "";
  candidate: string | "";
  gender: string | "";
  result: number | 0;
  total_dpt: number | 0;
  total_pengguna_hak_pilih: number | 0;
  total_sah: number | 0;
  total_tidak_sah: number | 0;
  total_kursi: number | 0;
}

export interface UploadWinnerEntity extends BaseUploadEntity {
  data: UploadDataWinnerEntity[];
}

export interface UploadDataWinnerEntity {
  id: number;
  dapil: string | "";
  sequence: string | "";
  candidate: string | "";
  party: string | "";
}

export interface UploadDataSurveyEntity {
  id: number;
  party: string | "";
  candidate: string | "";
  gender: string | "";
  percentage: string | "";
  institution: string | "";
  period: string | "";
  type: string | "";
}

export interface UploadSurveyEntity extends BaseUploadEntity {
  dapil: string | "";
  data: UploadDataSurveyEntity[];
}

export interface UploadSurveysEntity extends BaseEntity {
  period_survey: string | "";
  file: string | "";
  dapil: DapilEntity;
}

export interface UploadScoreEntity extends BaseUploadEntity {
  data: UploadDataScoreEntity[];
}

export interface UploadDataScoreEntity {
  id: number;
  dapil: string | "";
  candidate: string | "";
  gender: string | "";
  party: string | "";
  score_type: number | "";
  score: number | "";
  notes: string | "";
}
