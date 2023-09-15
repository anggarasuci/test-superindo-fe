import { setCookies } from "cookies-next";
import type { AnyAction } from "redux";
import { ChangePasswordStore } from "src/domain/store/change-password-store";
import { ChangePasswordActionType } from "../action-type/change-password-action-type";

type ChangePasswordStoreState = Omit<
  ChangePasswordStore,
  "changePassword"
>;

const INITIAL_STATE: ChangePasswordStoreState = {
  changePasswordObject: undefined,
  validation: undefined,
  status: undefined,
};

const changePasswordReducer = (
  state: ChangePasswordStoreState = INITIAL_STATE,
  action: AnyAction
) => {
  switch (action.type) {
    case ChangePasswordActionType.CHANGE_PASSWORD:
      return {
        ...state,
        changePasswordObject: action.payload.data,
        status: action.payload.status,
      };
    default:
      return state;
  }
};

export { changePasswordReducer };
export type { ChangePasswordStoreState };