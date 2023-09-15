import getConfig from "next/config";
import { fetchWrapper } from "../../helpers/fetch-wrapper";
import { RequestPartyEntity } from "src/domain/entity/party-entity";
import { Endpoint } from "src/helpers/constant/endpoint";
import { PartyActionType } from "../action-type/party-action-type";

const { publicRuntimeConfig } = getConfig();
const baseUrl = `${publicRuntimeConfig.apiUrl}${Endpoint.parties}`;

const getParties = async (
  name?: string
) => {
  return fetchWrapper.get(
    PartyActionType.GET_PARTIES,
    `${baseUrl}?search=${name ?? ""}`
  );
};

const getPartyById = async (
  id: number
) => {
  return fetchWrapper.get(
    PartyActionType.GET_PARTY_BY_ID,
    `${baseUrl}${id}/`
  );
};

const submit = async (
  isEdit: boolean,
  request: RequestPartyEntity
) => {
  return isEdit
    ? fetchWrapper.put(
        PartyActionType.UPDATE_PARTY,
        `${baseUrl}${request.id}/`,
        request
      )
    : fetchWrapper.post(
        PartyActionType.SUBMIT_PARTY,
        `${baseUrl}`,
        request
      );
};

const remove = async (
  id: number
) => {
  return fetchWrapper.delete(
    PartyActionType.REMOVE_PARTY,
    `${baseUrl}${id}/`
  );
};

export const PartyService = {
  getParties,
  getPartyById,
  submit,
  remove
};
