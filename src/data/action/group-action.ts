import { RequestGroupEntity } from "src/domain/entity/group-entity";
import { GroupRepository } from "src/domain/repository/group-repository";
import { GroupActionType } from "../action-type/group-action-type";
import { SettingActionType } from "../action-type/setting-action-type";

const getGroupAction =
  (name?: string) => async (dispatch: any) => {
    dispatch({ type: SettingActionType.SET_LOADING, isLoading: true });
    const response = await GroupRepository.getGroups(
      name
    );
    dispatch({
      type: GroupActionType.GET_GROUPS,
      payload: response,
    });
    dispatch({ type: SettingActionType.SET_LOADING, isLoading: false });
    return response;
  };

const submitAction =
  (isEdit: boolean, request: RequestGroupEntity) =>
  async (dispatch: any) => {
    const actionType = isEdit
      ? GroupActionType.UPDATE_GROUP
      : GroupActionType.SUBMIT_GROUP;

    dispatch({ type: SettingActionType.SET_LOADING, isLoading: true });
    const response = await GroupRepository.submit(
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
    const response = await GroupRepository.remove(id);
    dispatch({
      type: GroupActionType.REMOVE_GROUP,
      payload: id,
    });
    dispatch({ type: SettingActionType.SET_LOADING, isLoading: false });
    return response;
  };

export const GroupAction = { getGroupAction, submitAction, removeAction };
