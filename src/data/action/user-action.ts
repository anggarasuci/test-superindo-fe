import { RequestUserEntity } from "src/domain/entity/user-entity";
import { UserRepository } from "src/domain/repository/user-repository";
import { UserActionType } from "../action-type/user-action-type";
import { SettingActionType } from "../action-type/setting-action-type";

const getUserAction =
  (name?: string) => async (dispatch: any) => {
    dispatch({ type: SettingActionType.SET_LOADING, isLoading: true });
    const response = await UserRepository.getUsers(
      name
    );
    dispatch({
      type: UserActionType.GET_ALL_USER,
      payload: response,
    });
    dispatch({ type: SettingActionType.SET_LOADING, isLoading: false });
    return response;
  };

const submitAction =
  (isEdit: boolean, request: RequestUserEntity) =>
  async (dispatch: any) => {
    const actionType = isEdit
      ? UserActionType.UPDATE_USER
      : UserActionType.SUBMIT_USER;

    dispatch({ type: SettingActionType.SET_LOADING, isLoading: true });
    const response = await UserRepository.submit(
      isEdit,
      request
    );
    dispatch({
      type: actionType,
      payload: response,
    });
    dispatch({ type: SettingActionType.SET_LOADING, isLoading: false });
    return response;
  };

const removeAction =
  (id: number) => async (dispatch: any) => {
    dispatch({ type: SettingActionType.SET_LOADING, isLoading: true });
    const response = await UserRepository.remove(id);
    dispatch({
      type: UserActionType.REMOVE_USER,
      payload: id,
    });
    dispatch({ type: SettingActionType.SET_LOADING, isLoading: false });
    return response;
  };

export const UserAction = { getUserAction, submitAction, removeAction };
