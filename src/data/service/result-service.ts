import getConfig from "next/config";
import {
  SyncEntity,
  SyncScoreEntity,
  SyncSurveyEntity,
} from "src/domain/entity/sync-entity";
import {
  UploadEntity,
  UploadScoreEntity,
  UploadSurveyEntity,
  UploadWinnerEntity,
} from "src/domain/entity/upload-entity";
import { Endpoint } from "src/helpers/constant/endpoint";
import { fetchWrapper } from "../../helpers/fetch-wrapper";

const { publicRuntimeConfig } = getConfig();
const baseUrl = `${publicRuntimeConfig.apiUrl}${Endpoint.import}`;

const upload = async (actionType: string, uploadEntity: UploadEntity) => {
  const requestData = uploadEntity.data.map(
    ({ id, ...keepAttrs }) => keepAttrs
  );
  const requestBody = {
    ...uploadEntity,
    data: requestData,
  };
  const response = await fetchWrapper.post(
    actionType,
    `${baseUrl}`,
    requestBody
  );
  return response;
};

const syncData = async (actionType: string, syncEntity: SyncEntity) => {
  return await fetchWrapper.post(
    actionType,
    `${publicRuntimeConfig.apiUrl}${Endpoint.syncData}`,
    syncEntity
  );
};

const uploadWinner = async (
  actionType: string,
  uploadWinnerEntity: UploadWinnerEntity
) => {
  const url = `${publicRuntimeConfig.apiUrl}${Endpoint.winner}`;
  const requestData = uploadWinnerEntity.data.map(
    ({ id, ...keepAttrs }) => keepAttrs
  );
  const requestBody = {
    ...uploadWinnerEntity,
    data: requestData,
  };
  const response = await fetchWrapper.post(actionType, `${url}`, requestBody);
  return response;
};

const uploadSurvey = async (
  actionType: string,
  uploadSurveyEntity: UploadSurveyEntity
) => {
  const url = `${publicRuntimeConfig.apiUrl}${Endpoint.survey}`;
  const requestData = uploadSurveyEntity.data.map(
    ({ id, ...keepAttrs }) => keepAttrs
  );
  const requestBody = {
    ...uploadSurveyEntity,
    data: requestData,
  };
  const response = await fetchWrapper.post(actionType, `${url}`, requestBody);
  return response;
};

const syncSurveyData = async (
  actionType: string,
  syncSurveyEntity: SyncSurveyEntity
) => {
  return await fetchWrapper.post(
    actionType,
    `${publicRuntimeConfig.apiUrl}${Endpoint.syncSurveyData}`,
    syncSurveyEntity
  );
};

const uploadScore = async (
  actionType: string,
  uploadScoreEntity: UploadScoreEntity
) => {
  const url = `${publicRuntimeConfig.apiUrl}${Endpoint.importScore}`;
  const requestData = uploadScoreEntity.data.map(
    ({ id, ...keepAttrs }) => keepAttrs
  );
  const requestBody = {
    ...uploadScoreEntity,
    data: requestData,
  };
  const response = await fetchWrapper.post(actionType, `${url}`, requestBody);
  return response;
};

const syncScoreData = async (
  actionType: string,
  syncScoreEntity: SyncScoreEntity
) => {
  return await fetchWrapper.post(
    actionType,
    `${publicRuntimeConfig.apiUrl}${Endpoint.syncScoreData}`,
    syncScoreEntity
  );
};

export const ResultService = {
  upload,
  syncData,
  uploadWinner,
  uploadSurvey,
  syncSurveyData,
  uploadScore,
  syncScoreData,
};
