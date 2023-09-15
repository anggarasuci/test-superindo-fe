import getConfig from "next/config";
import { fetchWrapper } from "../../helpers/fetch-wrapper";
import { Endpoint } from "src/helpers/constant/endpoint";
import { ResultProvinceActionType } from "../action-type/result-province-action-type";
import { DefaultValue } from "src/helpers/constant/default-value";

const { publicRuntimeConfig } = getConfig();
const baseUrl = `${publicRuntimeConfig.apiUrl}${Endpoint.resultProvince}`;

const getResult = async (province: string, period: string, type: string) => {
  return fetchWrapper.get(
    ResultProvinceActionType.GET_RESULT_PROVINCE,
    `${baseUrl}?province=${province ?? ""}&candidate=0&period=${
      period ?? ""
    }&type=${type ?? ""}&limit=${DefaultValue.Value.maxLimit}`
  );
};

const getResultPerParty = async (
  province: string,
  partyId: string,
  period: string,
  type: string
) => {
  return fetchWrapper.get(
    ResultProvinceActionType.GET_RESULT_PROVINCE_PER_PARTY,
    `${baseUrl}?province=${
      province ?? ""
    }&party=${partyId}&candidate=0&period=${period ?? ""}&type=${
      type ?? ""
    }&limit=${DefaultValue.Value.maxLimit}`
  );
};

const getResultCandidate = async (
  province: string,
  period: string,
  type: string
) => {
  return fetchWrapper.get(
    ResultProvinceActionType.GET_RESULT_PROVINCE_CANDIDATE,
    `${baseUrl}?province=${province ?? ""}&party=0&period=${
      period ?? ""
    }&type=${type ?? ""}&limit=${DefaultValue.Value.maxLimit}`
  );
};

const getResultCandidatePerParty = async (
  province: string,
  partyId: string,
  period: string,
  type: string
) => {
  const partyParam = partyId != "" ? `&party_candidate=${partyId ?? 0}` : "";

  return fetchWrapper.get(
    ResultProvinceActionType.GET_RESULT_PROVINCE_CANDIDATE_PER_PARTY,
    `${baseUrl}?province=${province ?? ""}&party=0&period=${
      period ?? ""
    }&type=${type ?? ""}&${partyParam}&limit=${
      DefaultValue.Value.maxLimit
    }`
  );
};

export const ResultProvinceService = {
  getResult,
  getResultPerParty,
  getResultCandidate,
  getResultCandidatePerParty,
};
