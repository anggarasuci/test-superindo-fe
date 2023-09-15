import { ChangePasswordEntity } from "src/domain/entity/change-password-entity";
import { ChangePasswordRepository } from "src/domain/repository/change-password-repository";
import { ChangePasswordActionType } from "../action-type/change-password-action-type";
import { SettingActionType } from "../action-type/setting-action-type";

const changePasswordAction = (changePasswordEntity: ChangePasswordEntity) => async (dispatch: any) => {
  dispatch({type: SettingActionType.SET_LOADING, isLoading: true});
  const response = await ChangePasswordRepository.changePassword(changePasswordEntity);
  dispatch({ type: ChangePasswordActionType.CHANGE_PASSWORD, payload: response });
  dispatch({type: SettingActionType.SET_LOADING, isLoading: false});
  return response;
};

export const ChangePasswordAction = { changePasswordAction };
