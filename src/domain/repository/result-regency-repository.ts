import { ResultRegencyService } from "src/data/service/result-regency-service";
import { mapResponse } from "src/helpers/map-response";
import { ResponseEntity } from "../entity/response-entity";
import { ResultRegencyEntity } from "../entity/result-regency-entity";

const getResult = async (
  province?: string,
  regency?: string,
  period?: string,
  type?: string,
  isTop?: boolean
): Promise<ResponseEntity<[ResultRegencyEntity]>> => {
  return mapResponse(await ResultRegencyService.getResult(province, regency, period, type, isTop));
};

const getResultPerParty = async (
  province?: string,
  regency?: string,
  partyId?: string,
  period?: string,
  type?: string
): Promise<ResponseEntity<[ResultRegencyEntity]>> => {
  return mapResponse(await ResultRegencyService.getResultPerParty(province, regency, partyId, period, type));
};

const getResultCandidate = async (
  province?: string,
  regency?: string,
  period?: string,
  type?: string
): Promise<ResponseEntity<[ResultRegencyEntity]>> => {
  return mapResponse(await ResultRegencyService.getResultCandidate(province, regency, period, type));
};

const getResultPerCandidate = async (
  regency?: string,
  candidate?: string,
  period?: string,
  type?: string
): Promise<ResponseEntity<[ResultRegencyEntity]>> => {
  return mapResponse(await ResultRegencyService.getResultPerCandidate(regency, candidate, period, type));
};

const getResultCandidatePerParty = async (
  regency?: string,
  party?: string,
  period?: string,
  type?: string
): Promise<ResponseEntity<[ResultRegencyEntity]>> => {
  return mapResponse(await ResultRegencyService.getResultCandidatePerParty(regency, party, period, type));
};

export const ResultRegencyRepository = {
  getResult,
  getResultPerParty,
  getResultCandidate,
  getResultPerCandidate,
  getResultCandidatePerParty
};
