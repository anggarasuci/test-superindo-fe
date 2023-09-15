import getConfig from "next/config";
import { fetchWrapper } from "../../helpers/fetch-wrapper";
import { Endpoint } from "src/helpers/constant/endpoint";
import { ResultWinnerActionType } from "../action-type/result-winner-action-type";
import { DefaultValue } from "src/helpers/constant/default-value";

const { publicRuntimeConfig } = getConfig();
const baseUrl = `${publicRuntimeConfig.apiUrl}${Endpoint.winner}`;

const getResultWinner = async (
  dapil: string,
  includeProvince?: boolean,
  province?: string,
  party?: string,
  period?: string,
  type?: string
) => {
  const includeProvinceParam = includeProvince ? "&province_inc=1" : "";
  const provinceParam = province ? `&province=${province}` : "";
  const partyParam = party ? `&party=${party}` : "";
  const periodParam = period ? `&period=${period}` : "";
  const typeParam = type ? `&type=${type}` : "";

  return fetchWrapper.get(
    ResultWinnerActionType.GET_RESULT_WINNER,
    `${baseUrl}?dapil=${dapil}${includeProvinceParam}` +
      `${periodParam}${typeParam}${provinceParam}${partyParam}&limit=${DefaultValue.Value.maxLimit}`
  );
};

export const ResultWinnerService = {
  getResultWinner,
};
