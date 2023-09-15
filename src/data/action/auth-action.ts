import { LoginEntity } from "src/domain/entity/login-entity";
import { AuthRepository } from "src/domain/repository/auth-repository";
import { AuthActionType } from "../action-type/auth-action-type";

const loginAction = (loginEntity: LoginEntity) => async (dispatch: any) => {
  const response = await AuthRepository.login(loginEntity);
  dispatch({ type: AuthActionType.AUTH_LOGIN, payload: response });
  return response;
};

const logoutAction = () => (dispatch: any) => {
  dispatch({ type: AuthActionType.LOGOUT, payload: null });
};

export const AuthAction = { loginAction, logoutAction };
