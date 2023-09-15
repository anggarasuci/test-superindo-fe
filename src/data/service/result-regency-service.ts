import getConfig from "next/config";
import { fetchWrapper } from "../../helpers/fetch-wrapper";
import { Endpoint } from "src/helpers/constant/endpoint";
import { ResultRegencyActionType } from "../action-type/result-regency-action-type";
import { DefaultValue } from "src/helpers/constant/default-value";

const { publicRuntimeConfig } = getConfig();
const baseUrl = `${publicRuntimeConfig.apiUrl}${Endpoint.resultRegency}`;

const getResult = async (
  province: string,
  regency: string,
  period: string,
  type: string,
  isTop: boolean
) => {
  const isTopParam = isTop ? "&top=1" : "";
  return fetchWrapper.get(
    ResultRegencyActionType.GET_RESULT_REGENCY,
    `${baseUrl}?province=${province}&regency=${
      regency ?? ""
    }&candidate=0&period=${period ?? ""}&type=${type ?? ""}&limit=${
      DefaultValue.Value.maxLimit
    }${isTopParam}`
  );
};

const getResultPerParty = async (
  province: string,
  regency: string,
  partyId: string,
  period: string,
  type: string
) => {
  return fetchWrapper.get(
    ResultRegencyActionType.GET_RESULT_REGENCY_PER_PARTY,
    `${baseUrl}?province=${province ?? ""}&regency=${
      regency ?? ""
    }&party=${partyId}&candidate=0&period=${period ?? ""}&type=${
      type ?? ""
    }&limit=${DefaultValue.Value.maxLimit}`
  );
};

const getResultCandidate = async (
  province: string,
  regency: string,
  period: string,
  type: string
) => {
  return fetchWrapper.get(
    ResultRegencyActionType.GET_RESULT_REGENCY_CANDIDATE,
    `${baseUrl}?province=${province}&regency=${regency ?? ""}&party=0&period=${
      period ?? ""
    }&type=${type ?? ""}&limit=999`
  );
};

const getResultPerCandidate = async (
  regency: string,
  candidate: string,
  period: string,
  type: string
) => {
  return fetchWrapper.get(
    ResultRegencyActionType.GET_RESULT_REGENCY_PER_CANDIDATE,
    `${baseUrl}?regency=${
      regency ?? ""
    }&candidate=${candidate}&party=0&period=${period ?? ""}&type=${type ?? ""}`
  );
};

const getResultCandidatePerParty = async (
  regency: string,
  party: string,
  period: string,
  type: string
) => {
  return fetchWrapper.get(
    ResultRegencyActionType.GET_RESULT_REGENCY_CANDIDATE_PER_PARTY,
    `${baseUrl}?regency=${
      regency ?? ""
    }&party=0&party_candidate=${party ?? 0}&period=${period ?? ""}&type=${type ?? ""}&limit=${DefaultValue.Value.maxLimit}`
  );
};

export const ResultRegencyService = {
  getResult,
  getResultPerParty,
  getResultCandidate,
  getResultPerCandidate,
  getResultCandidatePerParty
};
