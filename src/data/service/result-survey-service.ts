import getConfig from "next/config";
import { RequestResultNationalEntity } from "src/domain/entity/result-national-entity";
import { RequestResultSurveyEntity } from "src/domain/entity/result-survey-entity";
import { DefaultValue } from "src/helpers/constant/default-value";
import { Endpoint } from "src/helpers/constant/endpoint";
import { fetchWrapper } from "../../helpers/fetch-wrapper";
import { ResultSurveyActionType } from "../action-type/result-survey-action-type";

const { publicRuntimeConfig } = getConfig();
const baseUrl = `${publicRuntimeConfig.apiUrl}${Endpoint.resultSurvey}`;

const getResultSurvey = async (requestEntity: RequestResultSurveyEntity) => {
  const keyPartyParam =
    requestEntity?.displayBy == "party" ? `party` : `party_candidate`;
  const provinceParam = requestEntity?.province
    ? `&province=${requestEntity?.province}`
    : "";
  const partyParam = requestEntity?.party
    ? `&${keyPartyParam}=${requestEntity?.party}`
    : "";
  const periodParam = requestEntity?.period
    ? `&period=${requestEntity?.period}`
    : "";
  const typeParam = requestEntity?.type ? `&type=${requestEntity?.type}` : "";
  const institutionParam = requestEntity?.institution
    ? `&institution=${requestEntity?.institution}`
    : "";
  const dapilParam = requestEntity?.dapil
    ? `&dapil=${requestEntity?.dapil}`
    : "";
  const displayByParam =
    requestEntity?.displayBy == "party" ? `&candidate=0` : `&party=0`;
  const groupPeriodSurveyParam = requestEntity?.group_period_survey
    ? `&group_period_survey=${requestEntity?.group_period_survey}`
    : "";

  return fetchWrapper.get(
    ResultSurveyActionType.GET_RESULT_SURVEY,
    `${baseUrl}?limit=${DefaultValue.Value.maxLimit}${dapilParam}${institutionParam}` +
      `${periodParam}${typeParam}${provinceParam}${partyParam}${displayByParam}${groupPeriodSurveyParam}`
  );
};

const getResultSurveyNational = async (
  requestEntity: RequestResultNationalEntity
) => {
  const url = `${publicRuntimeConfig.apiUrl}${Endpoint.resultNational}`;

  const partyParam = requestEntity?.party
    ? `&party=${requestEntity?.party}`
    : "";
  const periodParam = requestEntity?.group_period_survey
    ? `&group_period_survey=${requestEntity?.group_period_survey}`
    : "";

  return fetchWrapper.get(
    ResultSurveyActionType.GET_RESULT_SURVEY_NATIONAL,
    `${url}?limit=${DefaultValue.Value.maxLimit}${partyParam}${periodParam}`
  );
};

export const ResultSurveyService = {
  getResultSurvey,
  getResultSurveyNational
};
