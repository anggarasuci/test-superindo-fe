import getConfig from "next/config";
import { fetchWrapper } from "../../helpers/fetch-wrapper";
import { Endpoint } from "src/helpers/constant/endpoint";
import { PeriodActionType } from "../action-type/period-action-type";

const { publicRuntimeConfig } = getConfig();
const baseUrl = `${publicRuntimeConfig.apiUrl}${Endpoint.periods}`;

const getPeriods = async (
  name?: string
) => {
  return fetchWrapper.get(
    PeriodActionType.GET_PERIODS,
    `${baseUrl}?search=${name ?? ""}`
  );
};

const getPeriodById = async (
  id: number
) => {
  return fetchWrapper.get(
    PeriodActionType.GET_PERIOD_BY_ID,
    `${baseUrl}${id}/`
  );
};

export const PeriodService = {
  getPeriods,
  getPeriodById
};
