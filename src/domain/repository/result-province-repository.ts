import { ResultProvinceService } from "src/data/service/result-province-service";
import { mapResponse } from "src/helpers/map-response";
import { ResponseEntity } from "../entity/response-entity";
import { ResultProvinceEntity } from "../entity/result-province-entity";

const getResult = async (
  province?: string,
  period?: string,
  type?: string
): Promise<ResponseEntity<[ResultProvinceEntity]>> => {
  return mapResponse(await ResultProvinceService.getResult(province, period, type));
};

const getResultPerParty = async (
  province?: string,
  partyId?: string,
  period?: string,
  type?: string
): Promise<ResponseEntity<[ResultProvinceEntity]>> => {
  return mapResponse(await ResultProvinceService.getResultPerParty(province, partyId, period, type));
};

const getResultCandidate = async (
  province?: string,
  period?: string,
  type?: string
): Promise<ResponseEntity<[ResultProvinceEntity]>> => {
  return mapResponse(await ResultProvinceService.getResultCandidate(province, period, type));
};

const getResultCandidatePerParty = async (
  province?: string,
  partyId?: string,
  period?: string,
  type?: string
): Promise<ResponseEntity<[ResultProvinceEntity]>> => {
  return mapResponse(await ResultProvinceService.getResultCandidatePerParty(province, partyId, period, type));
};

export const ResultProvinceRepository = {
  getResult,
  getResultPerParty,
  getResultCandidate,
  getResultCandidatePerParty
};
