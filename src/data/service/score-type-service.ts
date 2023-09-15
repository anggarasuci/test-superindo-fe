import getConfig from "next/config";
import { fetchWrapper } from "../../helpers/fetch-wrapper";
import { RequestScoreTypeEntity } from "src/domain/entity/score-type-entity";
import { Endpoint } from "src/helpers/constant/endpoint";
import { ScoreTypeActionType } from "../action-type/score-type-action-type";
import { DefaultValue } from "src/helpers/constant/default-value";

const { publicRuntimeConfig } = getConfig();
const baseUrl = `${publicRuntimeConfig.apiUrl}${Endpoint.scoreTypes}`;

const getScoreTypes = async (name?: string) => {
  return fetchWrapper.get(
    ScoreTypeActionType.GET_SCORE_TYPES,
    `${baseUrl}?search=${name}`
  );
};

const getScoreTypeById = async (
  id: number
) => {
  return fetchWrapper.get(
    ScoreTypeActionType.GET_SCORE_TYPE_ID,
    `${baseUrl}${id}/`
  );
};

const submit = async (
  isEdit: boolean,
  request: RequestScoreTypeEntity
) => {
  return isEdit
    ? fetchWrapper.put(
        ScoreTypeActionType.UPDATE_SCORE_TYPE,
        `${baseUrl}${request.id}/`,
        request
      )
    : fetchWrapper.post(
        ScoreTypeActionType.SUBMIT_SCORE_TYPE,
        `${baseUrl}`,
        request
      );
};

const remove = async (
  id: number
) => {
  return fetchWrapper.delete(
    ScoreTypeActionType.REMOVE_SCORE_TYPE,
    `${baseUrl}${id}/`
  );
};

export const ScoreTypeService = {
  getScoreTypes,
  getScoreTypeById,
  submit,
  remove
};
