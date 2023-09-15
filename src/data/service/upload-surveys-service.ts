import getConfig from "next/config";
import { fetchWrapper } from "../../helpers/fetch-wrapper";
import { Endpoint } from "src/helpers/constant/endpoint";
import { UploadSurveysActionType } from "../action-type/upload-surveys-action-type";

const { publicRuntimeConfig } = getConfig();
const baseUrl = `${publicRuntimeConfig.apiUrl}${Endpoint.attachFileSurvey}`;

const getUploadSurveys = async (
    dapil: string
  ) => {
    return fetchWrapper.get(
      UploadSurveysActionType.GET_UPLOAD_SURVEYS_BY_ID,
      `${baseUrl}?search=${dapil}`
    );
  };

const getUploadSurveysById = async (
  id: string
) => {
  return fetchWrapper.get(
    UploadSurveysActionType.GET_UPLOAD_SURVEYS_BY_ID,
    `${baseUrl}${id}/`
  );
};

export const UploadSurveysService = {
    getUploadSurveys,
    getUploadSurveysById
};
