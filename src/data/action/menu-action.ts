import { RequestMenuEntity } from "src/domain/entity/menu-entity";
import { MenuRepository } from "src/domain/repository/menu-repository";
import { MenuActionType } from "../action-type/menu-action-type";
import { SettingActionType } from "../action-type/setting-action-type";

const getMenuAction =
  (name?: string) => async (dispatch: any) => {
    dispatch({ type: SettingActionType.SET_LOADING, isLoading: true });
    const response = await MenuRepository.getMenus(
      name
    );
    dispatch({
      type: MenuActionType.GET_MENUS,
      payload: response,
    });
    dispatch({ type: SettingActionType.SET_LOADING, isLoading: false });
    return response;
  };

const submitAction =
  (isEdit: boolean, request: RequestMenuEntity) =>
  async (dispatch: any) => {
    const actionType = isEdit
      ? MenuActionType.UPDATE_MENU
      : MenuActionType.SUBMIT_MENU;

    dispatch({ type: SettingActionType.SET_LOADING, isLoading: true });
    const response = await MenuRepository.submit(
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
    const response = await MenuRepository.remove(id);
    dispatch({
      type: MenuActionType.REMOVE_MENU,
      payload: id,
    });
    dispatch({ type: SettingActionType.SET_LOADING, isLoading: false });
    return response;
  };

export const MenuAction = { getMenuAction, submitAction, removeAction };
