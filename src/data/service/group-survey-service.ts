import getConfig from "next/config";
import { fetchWrapper } from "../../helpers/fetch-wrapper";
import { Endpoint } from "src/helpers/constant/endpoint";
import { GroupSurveyActionType } from "../action-type/group-survey-action-type";
import { RequestGroupSurveyEntity } from "src/domain/entity/group-survey-entity";

const { publicRuntimeConfig } = getConfig();
const baseUrl = `${publicRuntimeConfig.apiUrl}${Endpoint.groupSurvey}`;

const getGroupSurveys = async (
  name?: string,
) => {
  return fetchWrapper.get(
    GroupSurveyActionType.GET_GROUP_SURVEYS,
    `${baseUrl}?search=${name ?? ""}`
  );
};

const getGroupSurveyById = async (id: number) => {
  return fetchWrapper.get(GroupSurveyActionType.GET_GROUP_SURVEY_BY_ID, `${baseUrl}${id}/`);
};

const submit = async (isEdit: boolean, request: RequestGroupSurveyEntity) => {
  return isEdit
    ? fetchWrapper.put(
        GroupSurveyActionType.UPDATE_GROUP_SURVEY,
        `${baseUrl}${request.id}/`,
        request
      )
    : fetchWrapper.post(GroupSurveyActionType.SUBMIT_GROUP_SURVEY, `${baseUrl}`, request);
};

const remove = async (id: string) => {
  return fetchWrapper.delete(GroupSurveyActionType.REMOVE_GROUP_SURVEY, `${baseUrl}${id}/`);
};

export const GroupSurveyService = {
  getGroupSurveys,
  getGroupSurveyById,
  submit,
  remove,
};
