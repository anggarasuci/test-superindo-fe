import getConfig from "next/config";
import { fetchWrapper } from "../../helpers/fetch-wrapper";
import { Endpoint } from "src/helpers/constant/endpoint";
import { TypeActionType } from "../action-type/type-action-type";

const { publicRuntimeConfig } = getConfig();
const baseUrl = `${publicRuntimeConfig.apiUrl}${Endpoint.types}`;

const getTypes = async (
  name?: string
) => {
  return fetchWrapper.get(
    TypeActionType.GET_TYPES,
    `${baseUrl}?search=${name ?? ""}`
  );
};

const getTypeById = async (
  id: number
) => {
  return fetchWrapper.get(
    TypeActionType.GET_TYPE_BY_ID,
    `${baseUrl}${id}/`
  );
};

export const TypeService = {
  getTypes,
  getTypeById
};
