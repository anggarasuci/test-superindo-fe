import getConfig from "next/config";
import { fetchWrapper } from "../../helpers/fetch-wrapper";
import { RequestDapilEntity } from "src/domain/entity/dapil-entity";
import { Endpoint } from "src/helpers/constant/endpoint";
import { DapilActionType } from "../action-type/dapil-action-type";

const { publicRuntimeConfig } = getConfig();
const baseUrl = `${publicRuntimeConfig.apiUrl}${Endpoint.baseDapils}`;

const getDapils = async (
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
    DapilActionType.GET_DAPILS,
    `${url}?search=${name ?? ""}${provinceParam}${typeParam}${periodParam}`
  );
};

const getDapilById = async (id: string) => {
  return fetchWrapper.get(DapilActionType.GET_DAPIL_BY_ID, `${baseUrl}${id}/`);
};

const submit = async (isEdit: boolean, request: RequestDapilEntity) => {
  return isEdit
    ? fetchWrapper.put(
        DapilActionType.UPDATE_DAPIL,
        `${baseUrl}${request.id}/`,
        request
      )
    : fetchWrapper.post(DapilActionType.SUBMIT_DAPIL, `${baseUrl}`, request);
};

const remove = async (id: number) => {
  return fetchWrapper.delete(DapilActionType.REMOVE_DAPIL, `${baseUrl}${id}/`);
};

export const DapilService = {
  getDapils,
  getDapilById,
  submit,
  remove,
};
