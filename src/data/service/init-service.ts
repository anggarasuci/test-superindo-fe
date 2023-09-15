import getConfig from "next/config";
import { LoginEntity } from "src/domain/entity/login-entity";
import { Endpoint } from "src/helpers/constant/endpoint";
import { fetchWrapper } from "../../helpers/fetch-wrapper";
import { InitActionType } from "../action-type/init-action-type";

const { publicRuntimeConfig } = getConfig();
const baseUrl = `${publicRuntimeConfig.apiUrl}`;

const initPeriods = async (
    name?: string
) => {
    return fetchWrapper.get(
        InitActionType.INIT_PERIODS,
        `${baseUrl}${Endpoint.periods}?search=${name ?? ""}`
    );
};

const initTypes = async (
    name?: string
) => {
    return fetchWrapper.get(
        InitActionType.INIT_TYPES,
        `${baseUrl}${Endpoint.types}?search=${name ?? ""}`
    );
};

const initUser = async (
    name?: string
) => {
    return fetchWrapper.get(
        InitActionType.INIT_USER,
        `${baseUrl}${Endpoint.user}?search=${name}`
    );
}

const setPeriodId = async (
    id: number
) => {
    return fetchWrapper.get(
        InitActionType.SET_PERIOD_ID,
        null
    )
}

const setTypeId = async (
    id: number
) => {
    return fetchWrapper.get(
        InitActionType.SET_TYPE_ID,
        null
    )
}

export const InitService = {
  initPeriods,
  initTypes,
  initUser,
  setPeriodId,
  setTypeId
};
