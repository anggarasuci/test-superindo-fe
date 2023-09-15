import { ResponseEntity } from "../entity/response-entity";
import { ResultRegencyEntity } from "../entity/result-regency-entity";
import { BaseStore } from "./base-store";

interface ResultRegencyStore extends BaseStore {
  results_regency: [ResultRegencyEntity];
  results_regency_candidates: [ResultRegencyEntity];
  results_regency_per_candidate: [ResultRegencyEntity];
  results_regency_per_party: [ResultRegencyEntity];
  results_regency_candidate_per_party: [ResultRegencyEntity];
  getResult(
    province?: string,
    regency?: string,
    period?: string,
    type?: string,
    isTop?: boolean
  ): Promise<ResponseEntity<[ResultRegencyEntity]>>;
  getResultCandidate(
    province?: string,
    regency?: string,
    period?: string,
    type?: string
  ): Promise<ResponseEntity<[ResultRegencyEntity]>>;
  getResultPerCandidate(
    regency?: string,
    candidate?: string,
    period?: string,
    type?: string
  ): Promise<ResponseEntity<[ResultRegencyEntity]>>;
  getResultPerParty(
    province?:string,
    regency?:string,
    partyId?: string,
    period?:string,
    type?:string
): Promise<ResponseEntity<[ResultRegencyEntity]>>;
  getResultCandidatePerParty(
    regency?:string,
    partyId?:string,
    period?:string,
    type?:string
): Promise<ResponseEntity<[ResultRegencyEntity]>>;
}

export type { ResultRegencyStore };
