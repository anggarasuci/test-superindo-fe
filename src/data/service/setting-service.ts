import getConfig from "next/config";
import { fetchWrapper } from "../../helpers/fetch-wrapper";
import { Endpoint } from "src/helpers/constant/endpoint";
import { SettingActionType } from "../action-type/setting-action-type";

const { publicRuntimeConfig } = getConfig();
const baseUrl = `${publicRuntimeConfig.apiUrl}${Endpoint.baseDapils}`;

const getGlobalDapils = async (
  name?: string,
  province?: string,
  type?: string,
  period?: string
) => {
  const provinceParam = province ? `&province=${province}` : "";
  const typeParam = type ? `&type=${type}` : "";
  const periodParam = period ? `&period=${period}` : "";

  const url =
    provinceParam && typeParam && periodParam
      ? `${publicRuntimeConfig.apiUrl}${Endpoint.dapils}`
      : baseUrl;

  return fetchWrapper.get(
    SettingActionType.GET_GLOBAL_DAPILS,
    `${url}?search=${name ?? ""}${provinceParam}${typeParam}${periodParam}`
  );
};

export const SettingService = {
    getGlobalDapils
};
