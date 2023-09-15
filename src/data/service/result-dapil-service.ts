import getConfig from "next/config";
import { fetchWrapper } from "../../helpers/fetch-wrapper";
import { Endpoint } from "src/helpers/constant/endpoint";
import { ResultDapilActionType } from "../action-type/result-dapil-action-type";
import { DefaultValue } from "src/helpers/constant/default-value";

const { publicRuntimeConfig } = getConfig();
const baseUrl = `${publicRuntimeConfig.apiUrl}${Endpoint.resultDapil}`;

const getResultParty = async (dapil: string, period: string, type: string) => {
  return fetchWrapper.get(
    ResultDapilActionType.GET_RESULT_DAPIL_PARTY,
    `${baseUrl}?dapil=${dapil}&candidate=0&period=${period ?? ""}&type=${
      type ?? ""
    }`
  );
};

const getResultCandidate = async (
  dapil: string,
  period: string,
  type: string,
  province: string,
  party: string,
  start: string,
  end: string
) => {
  const provinceParam = province ? `&province=${province}` : "";
  const partyParam = party != "" ? `&party_candidate=${party ?? 0}` : "";
  const startParam = start ? `&start=${start}` : "";
  const endParam = end ? `&end=${end}` : "";

  return fetchWrapper.get(
    ResultDapilActionType.GET_RESULT_DAPIL_CANDIDATE,
    `${baseUrl}?dapil=${dapil ?? ""}&party=0&period=${period ?? ""}&type=${
      type ?? ""
    }${provinceParam}${startParam}${endParam}${partyParam}&limit=${
      DefaultValue.Value.maxLimit
    }`
  );
};

const getResultPerCandidate = async (
  candidate: string,
  period: string,
  type: string
) => {
  return fetchWrapper.get(
    ResultDapilActionType.GET_RESULT_DAPIL_PER_CANDIDATE,
    `${baseUrl}?candidate=${candidate ?? ""}&dapil=&period=${
      period ?? ""
    }&type=${type ?? ""}`
  );
};

const getResultRegion = async (
  candidate: string,
  period: string,
  type: string,
  province: string,
  regency: string
) => {
  return fetchWrapper.get(
    ResultDapilActionType.GET_RESULT_DAPIL_REGION,
    `${publicRuntimeConfig.apiUrl}${Endpoint.resultDapilRegion}?candidate=${
      candidate ?? ""
    }&period=${period ?? ""}&type=${type ?? ""}&province=${
      province ?? ""
    }&regency=${regency ?? ""}&limit=${DefaultValue.Value.maxLimit}`
  );
};

const getResultScore = async (
  dapil: string,
  period: string,
  type: string,
  party: string
) => {
  return fetchWrapper.get(
    ResultDapilActionType.GET_RESULT_DAPIL_SCORE,
    `${publicRuntimeConfig.apiUrl}${Endpoint.resultScore}?dapil=${
      dapil ?? ""
    }&period=${period ?? ""}&type=${type ?? ""}&party=${party ?? ""}&limit=${
      DefaultValue.Value.maxLimit
    }`
  );
};

const getResultCandidateScore = async (
  candidate: string,
  dapil: string,
  period: string,
  type: string,
  province: string,
  party: string
) => {
  return fetchWrapper.get(
    ResultDapilActionType.GET_RESULT_CANDIDATE_SCORE,
    `${publicRuntimeConfig.apiUrl}${Endpoint.resultCandidateScore}?dapil=${
      dapil ?? ""
    }&period=${period ?? ""}&type=${type ?? ""}&candidate=${
      candidate ?? ""
    }&province=${province ?? ""}&party=${party ?? ""}&limit=${
      DefaultValue.Value.maxLimit
    }`
  );
};

const getDashboard = async (period: string, type: string) => {
  return fetchWrapper.get(
    ResultDapilActionType.GET_DASHBOARD,
    `${publicRuntimeConfig.apiUrl}${
      Endpoint.resultCandidateScore
    }?dapil=&period=${period ?? ""}&type=${
      type ?? ""
    }&candidate=&province=&party=&limit=${
      DefaultValue.Value.maxLimit
    }&dashboard=1`
  );
};

const removeResultCandidateScore = async (id: number) => {
  return fetchWrapper.delete(
    ResultDapilActionType.REMOVE_CANDIDATE_SCORE,
    `${publicRuntimeConfig.apiUrl}${Endpoint.resultCandidateScore}${id}/`
  );
};

export const ResultDapilService = {
  getResultParty,
  getResultCandidate,
  getResultPerCandidate,
  getResultRegion,
  getResultScore,
  getResultCandidateScore,
  getDashboard,
  removeResultCandidateScore,
};
