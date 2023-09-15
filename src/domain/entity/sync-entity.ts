export interface SyncEntity {
  province: number | 1;
  regency: number | 1;
  district: number | 1;
  village: number | 1;
  tps: number | 1;
  dapil: number | 1;
}

export interface SyncSurveyEntity {
  survey: number;
  national: number;
}

export interface SyncScoreEntity {
  score: number;
}
