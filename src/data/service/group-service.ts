import getConfig from "next/config";
import { fetchWrapper } from "../../helpers/fetch-wrapper";
import { RequestGroupEntity } from "src/domain/entity/group-entity";
import { Endpoint } from "src/helpers/constant/endpoint";
import { GroupActionType } from "../action-type/group-action-type";

const { publicRuntimeConfig } = getConfig();
const baseUrl = `${publicRuntimeConfig.apiUrl}${Endpoint.groups}`;

const getGroups = async (
  name?: string
) => {
  return fetchWrapper.get(
    GroupActionType.GET_GROUPS,
    `${baseUrl}?search=${name ?? ""}`
  );
};

const getGroupById = async (
  id: number
) => {
  return fetchWrapper.get(
    GroupActionType.GET_GROUP_BY_ID,
    `${baseUrl}${id}/`
  );
};

const submit = async (
  isEdit: boolean,
  request: RequestGroupEntity
) => {
  return isEdit
    ? fetchWrapper.put(
        GroupActionType.UPDATE_GROUP,
        `${baseUrl}${request.id}/`,
        request
      )
    : fetchWrapper.post(
        GroupActionType.SUBMIT_GROUP,
        `${baseUrl}`,
        request
      );
};

const remove = async (
  id: number
) => {
  return fetchWrapper.delete(
    GroupActionType.REMOVE_GROUP,
    `${baseUrl}${id}/`
  );
};

export const GroupService = {
  getGroups,
  getGroupById,
  submit,
  remove
};
