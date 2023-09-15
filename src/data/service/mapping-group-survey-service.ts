import getConfig from "next/config";
import { fetchWrapper } from "../../helpers/fetch-wrapper";
import { Endpoint } from "src/helpers/constant/endpoint";
import { MappingGroupSurveyActionType } from "../action-type/mapping-group-survey-action-type";
import { RequestMappingGroupSurveyEntity } from "src/domain/entity/mapping-group-survey-entity";

const { publicRuntimeConfig } = getConfig();
const baseUrl = `${publicRuntimeConfig.apiUrl}${Endpoint.mappingGroupSurvey}`;

const getMappingGroupSurveys = async () => {
  return fetchWrapper.get(
    MappingGroupSurveyActionType.GET_MAPPING_GROUP_SURVEYS,
    `${baseUrl}`
  );
};

const getMappingGroupSurveysByGroupSurveyId = async (id: number) => {
    return fetchWrapper.get(
      MappingGroupSurveyActionType.GET_MAPPING_GROUP_SURVEY_BY_GROUP_SURVEY_ID,
      `${baseUrl}?group_period_survey=${id}`
    );
  };

const getMappingGroupSurveyById = async (id: number) => {
  return fetchWrapper.get(MappingGroupSurveyActionType.GET_MAPPING_GROUP_SURVEY_BY_ID, `${baseUrl}${id}/`);
};

const submit = async (isEdit: boolean, request: RequestMappingGroupSurveyEntity) => {
  return isEdit
    ? fetchWrapper.put(
        MappingGroupSurveyActionType.UPDATE_MAPPING_GROUP_SURVEY,
        `${baseUrl}${request.id}/`,
        request
      )
    : fetchWrapper.post(MappingGroupSurveyActionType.SUBMIT_MAPPING_GROUP_SURVEY, `${baseUrl}`, request);
};

const remove = async (id: number) => {
  return fetchWrapper.delete(MappingGroupSurveyActionType.REMOVE_MAPPING_GROUP_SURVEY, `${baseUrl}${id}/`);
};

export const MappingGroupSurveyService = {
  getMappingGroupSurveys,
  getMappingGroupSurveyById,
  getMappingGroupSurveysByGroupSurveyId,
  submit,
  remove,
};
