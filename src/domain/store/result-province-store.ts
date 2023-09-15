import { ResponseEntity } from "../entity/response-entity";
import { ResultProvinceEntity } from "../entity/result-province-entity";
import { BaseStore } from "./base-store";

interface ResultProvinceStore extends BaseStore {
    results_province: [ResultProvinceEntity];
    results_province_candidate: [ResultProvinceEntity];
    results_province_per_party: [ResultProvinceEntity];
    results_province_candidate_per_party: [ResultProvinceEntity];
    getResult(
        province?:string,
        period?:string,
        type?:string
    ): Promise<ResponseEntity<[ResultProvinceEntity]>>;
    getResultCandidate(
        province?:string,
        period?:string,
        type?:string
    ): Promise<ResponseEntity<[ResultProvinceEntity]>>;
    getResultPerParty(
        province?:string,
        partyId?: string,
        period?:string,
        type?:string
    ): Promise<ResponseEntity<[ResultProvinceEntity]>>;
    getResultCandidatePerParty(
        province?:string,
        partyId?:string,
        period?:string,
        type?:string
    ): Promise<ResponseEntity<[ResultProvinceEntity]>>;
}

export type { ResultProvinceStore };