import { setCookies } from "cookies-next";
import type { AnyAction } from "redux";
import { AuthStore } from "src/domain/store/auth-store";
import { AuthActionType } from "../action-type/auth-action-type";

type AuthStoreState = Omit<
  AuthStore,
  "authLogin" | "logout" | "authRefreshToken"
>;

const INITIAL_STATE: AuthStoreState = {
  auth: undefined,
  validation: undefined,
  status: undefined,
};

const authReducer = (
  state: AuthStoreState = INITIAL_STATE,
  action: AnyAction
) => {
  switch (action.type) {
    case AuthActionType.AUTH_LOGIN:
      console.log(">>>>>>", action.payload ?? "-");
      return {
        ...state,
        auth: action.payload,
        status: action.payload.status,
      };
    case AuthActionType.REFRESH_LOGIN:
      return {
        ...state,
        auth: {
          ...state.auth,
          access: action.payload.data.access,
        },
      };
    default:
      return state;
  }
};

export { authReducer };
export type { AuthStoreState };
