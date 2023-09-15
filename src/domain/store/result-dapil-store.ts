import { DashboardEntity } from "../entity/dashboard-entity";
import { ResponseEntity } from "../entity/response-entity";
import { ResultCandidateScoreEntity } from "../entity/result-candidate-score-entity";
import { ResultDapilEntity } from "../entity/result-dapil-entity";
import { ResultDapilRegionEntity } from "../entity/result-dapil-region-entity";
import { ResultScoreEntity } from "../entity/result-score-entity";
import { BaseStore } from "./base-store";

interface ResultDapilStore extends BaseStore {
  results_dapil_parties: [ResultDapilEntity];
  results_dapil_candidates: [ResultDapilEntity];
  results_dapil_candidate: [ResultDapilEntity];
  resultDapilRegions: ResultDapilRegionEntity[];
  resutScores: ResultScoreEntity[];
  resultCandidateScore: ResultCandidateScoreEntity[];
  dashboard: DashboardEntity;

  getResultParty(
    dapil?: string,
    period?: string,
    type?: string
  ): Promise<ResponseEntity<[ResultDapilEntity]>>;
  getResultCandidate(
    dapil?: string,
    period?: string,
    type?: string,
    province?: string,
    party?: string,
    start?: string,
    end?: string
  ): Promise<ResponseEntity<[ResultDapilEntity]>>;
  getResultDapilPerCandidate(
    candidate: string,
    period?: string,
    type?: string
  ): Promise<ResponseEntity<[ResultDapilEntity]>>;
  getResultRegion(
    candidate: string,
    period: string,
    type: string,
    province: string,
    regency: string
  ): Promise<ResponseEntity<ResultDapilRegionEntity[]>>;
  getResultScore(
    dapil: string,
    period: string,
    type: string,
    party: string
  ): Promise<ResponseEntity<ResultScoreEntity[]>>;
  getResultCandidateScore(
    candidate: string,
    dapil: string,
    period: string,
    type: string,
    province: string,
    party: string
  ): Promise<ResponseEntity<ResultCandidateScoreEntity[]>>;
  getDashboard(
    period: string,
    type: string
  ): Promise<ResponseEntity<DashboardEntity>>;
  removeResultCandidateScore(id: number): Promise<ResponseEntity<string>>;
}

export type { ResultDapilStore };
