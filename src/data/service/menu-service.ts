import getConfig from "next/config";
import { fetchWrapper } from "../../helpers/fetch-wrapper";
import { RequestMenuEntity } from "src/domain/entity/menu-entity";
import { Endpoint } from "src/helpers/constant/endpoint";
import { MenuActionType } from "../action-type/menu-action-type";

const { publicRuntimeConfig } = getConfig();
const baseUrl = `${publicRuntimeConfig.apiUrl}${Endpoint.menus}`;

const getMenus = async (
  name?: string
) => {
  return fetchWrapper.get(
    MenuActionType.GET_MENUS,
    `${baseUrl}?search=${name ?? ""}`
  );
};

const getMenuById = async (
  id: number
) => {
  return fetchWrapper.get(
    MenuActionType.GET_MENU_BY_ID,
    `${baseUrl}${id}/`
  );
};

const submit = async (
  isEdit: boolean,
  request: RequestMenuEntity
) => {
  const requestBody = {
    ...request,
    parent: request?.parent_id
  }
  return isEdit
    ? fetchWrapper.put(
        MenuActionType.UPDATE_MENU,
        `${baseUrl}${request.id}/`,
        requestBody
      )
    : fetchWrapper.post(
        MenuActionType.SUBMIT_MENU,
        `${baseUrl}`,
        requestBody
      );
};

const remove = async (
  id: number
) => {
  return fetchWrapper.delete(
    MenuActionType.REMOVE_MENU,
    `${baseUrl}${id}/`
  );
};

export const MenuService = {
  getMenus,
  getMenuById,
  submit,
  remove
};
