import { ResultDapilService } from "src/data/service/result-dapil-service";
import { mapResponse } from "src/helpers/map-response";
import { DashboardEntity } from "../entity/dashboard-entity";
import { ResponseEntity } from "../entity/response-entity";
import { ResultCandidateScoreEntity } from "../entity/result-candidate-score-entity";
import { ResultDapilEntity } from "../entity/result-dapil-entity";
import { ResultScoreEntity } from "../entity/result-score-entity";

const getResultParty = async (
  dapil?: string,
  period?: string,
  type?: string
): Promise<ResponseEntity<[ResultDapilEntity]>> => {
  return mapResponse(
    await ResultDapilService.getResultParty(dapil, period, type)
  );
};

const getResultCandidate = async (
  dapil?: string,
  period?: string,
  type?: string,
  province?: string,
  party?: string,
  start?: string,
  end?: string
): Promise<ResponseEntity<[ResultDapilEntity]>> => {
  return mapResponse(
    await ResultDapilService.getResultCandidate(
      dapil,
      period,
      type,
      province,
      party,
      start,
      end
    )
  );
};

const getResultPerCandidate = async (
  candidate?: string,
  period?: string,
  type?: string
): Promise<ResponseEntity<[ResultDapilEntity]>> => {
  return mapResponse(
    await ResultDapilService.getResultPerCandidate(candidate, period, type)
  );
};

const getResultRegion = async (
  candidate: string,
  period: string,
  type: string,
  province: string,
  regency: string
): Promise<ResponseEntity<any[]>> => {
  return mapResponse(
    await ResultDapilService.getResultRegion(
      candidate,
      period,
      type,
      province,
      regency
    )
  );
};

const getResultScore = async (
  dapil: string,
  period: string,
  type: string,
  party: string
): Promise<ResponseEntity<ResultScoreEntity[]>> => {
  return mapResponse(
    await ResultDapilService.getResultScore(dapil, period, type, party)
  );
};

const getResultCandidateScore = async (
  candidate: string,
  dapil: string,
  period: string,
  type: string,
  province: string,
  party: string
): Promise<ResponseEntity<ResultCandidateScoreEntity[]>> => {
  return mapResponse(
    await ResultDapilService.getResultCandidateScore(
      candidate,
      dapil,
      period,
      type,
      province,
      party
    )
  );
};

const getDashboard = async (
  period: string,
  type: string
): Promise<ResponseEntity<DashboardEntity>> => {
  return mapResponse(await ResultDapilService.getDashboard(period, type));
};

const removeResultCandidateScore = async (
  id: number
): Promise<ResponseEntity<string>> => {
  return mapResponse(await ResultDapilService.removeResultCandidateScore(id));
};

export const ResultDapilRepository = {
  getResultParty,
  getResultCandidate,
  getResultPerCandidate,
  getResultRegion,
  getResultScore,
  getResultCandidateScore,
  getDashboard,
  removeResultCandidateScore,
};
