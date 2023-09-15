import getConfig from "next/config";
import { fetchWrapper } from "../../helpers/fetch-wrapper";
import { Endpoint } from "src/helpers/constant/endpoint";
import { BaseDapilActionType } from "../action-type/base-dapil-action-type";
import { RequestAdditionalField } from "src/domain/entity/base-dapil-entity";
import { ResponseEntity } from "src/domain/entity/response-entity";

const { publicRuntimeConfig } = getConfig();
const baseUrl = `${publicRuntimeConfig.apiUrl}${Endpoint.basedapils}`;

const getBaseDapils = async (name?: string) => {
  return fetchWrapper.get(
    BaseDapilActionType.GET_BASEDAPILS,
    `${baseUrl}?search=${name ?? ""}`
  );
};

const getBaseDapilById = async (id: number) => {
  return fetchWrapper.get(
    BaseDapilActionType.GET_BASEDAPIL_BY_ID,
    `${baseUrl}${id}/`
  );
};

const updateAdditionalField = async (request: RequestAdditionalField) => {
  return fetchWrapper.put(
    BaseDapilActionType.UPDATE_ADDITIONAL_FIELD,
    `${baseUrl}${request.id}/`,
    request
  );
};

export const BaseDapilService = {
  getBaseDapils,
  getBaseDapilById,
  updateAdditionalField,
};
