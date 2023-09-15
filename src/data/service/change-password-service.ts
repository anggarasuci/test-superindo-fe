import getConfig from "next/config";
import { ChangePasswordEntity } from "src/domain/entity/change-password-entity";
import { Endpoint } from "src/helpers/constant/endpoint";
import { fetchWrapper } from "../../helpers/fetch-wrapper";
import { ChangePasswordActionType } from "../action-type/change-password-action-type";

const { publicRuntimeConfig } = getConfig();
const baseUrl = `${publicRuntimeConfig.apiUrl}`;

const changePassword = async (changePasswordEntity: ChangePasswordEntity) => {
  const response = fetchWrapper.put(ChangePasswordActionType.CHANGE_PASSWORD, `${baseUrl}/change-password/`, changePasswordEntity);
  return response;
};

export const ChangePasswordService = {
  changePassword
};
