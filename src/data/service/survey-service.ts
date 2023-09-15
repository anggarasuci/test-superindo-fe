import getConfig from "next/config";
import { PdfSurveyEntity } from "src/domain/entity/survey-entity";
import { Endpoint } from "src/helpers/constant/endpoint";
import { fetchWrapper } from "../../helpers/fetch-wrapper";
import { SurveyActionType } from "../action-type/survey-action-type";

const { publicRuntimeConfig } = getConfig();
const baseUrl = `${publicRuntimeConfig.apiUrl}${Endpoint.attachFileSurvey}`;

const postSurvey = async (requestEntity: PdfSurveyEntity) => {
  const formData = new FormData();
  formData.append("file", requestEntity?.file, requestEntity?.file?.name);
  formData.append("dapil", requestEntity?.dapilId?.toString());
  formData.append("period_survey", requestEntity?.period_survey);

  const response = await fetchWrapper.postWithAttachFile(
    SurveyActionType.ATTACH_SURVEY_FILE,
    `${baseUrl}`,
    formData
  );
  return response;
};

const getSurveys = async (name?: string) => {
  return fetchWrapper.get(
    SurveyActionType.GET_SURVEYS,
    `${baseUrl}?search=${name ?? ""}`
  );
};

const removeUploadSurvey = async (id: string) => {
  return fetchWrapper.delete(
    SurveyActionType.REMOVE_SURVEY,
    `${baseUrl}${id}`
  );
};

export const SurveyService = {
  postSurvey,
  getSurveys,
  removeUploadSurvey,
};
