import getConfig from "next/config";
import { LoginEntity } from "src/domain/entity/login-entity";
import { Endpoint } from "src/helpers/constant/endpoint";
import { fetchWrapper } from "../../helpers/fetch-wrapper";
import { AuthActionType } from "../action-type/auth-action-type";

const { publicRuntimeConfig } = getConfig();
const baseUrl = `${publicRuntimeConfig.apiUrl}${Endpoint.login}`;

const login = async (loginEntity: LoginEntity) => {
  const response = fetchWrapper.get(
    AuthActionType.AUTH_LOGIN,
    `${baseUrl}${loginEntity.username}/${loginEntity.password}`
  );
  return response;
};

export const AuthService = {
  login,
};
