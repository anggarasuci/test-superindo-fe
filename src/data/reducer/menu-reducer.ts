import type { AnyAction } from "redux";
import { MenuStore } from "src/domain/store/menu-store";
import { MapStateReducers } from "src/helpers/map-state-reducers";
import { MenuActionType } from "../action-type/menu-action-type";

type MenuStoreState = Omit<
  MenuStore,
  "getMenus" | "submit" | "remove"
>;

const INITIAL_STATE: MenuStoreState = {
  menus: undefined,
  menuById: undefined,
  validation: undefined,
  status: undefined,
};

const menuReducer = (
  state: MenuStoreState = INITIAL_STATE,
  action: AnyAction
) => {
  if (action.payload?.status?.isError)
    return {
      ...state,
      status: action.payload?.status,
      validation: action.payload?.validation ?? [],
    };
  
  switch (action.type) {
    case MenuActionType.GET_MENUS:
      return {
        ...state,
        menus: action.payload.data ?? [],
        status: action?.payload?.status,
        validation: action?.payload?.validation ?? [],
      };
    case MenuActionType.SUBMIT_MENU:
      // const item = { id: action.payload.id, name: action.payload.name, url: action.payload.url, icon: action.payload.icon };
      return {
        ...state,
        status: action.payload?.status,
        validation: action.payload?.validation ?? [],
      };
    case MenuActionType.UPDATE_MENU:
      // const items = [{ id: action.payload.id, name: action.payload.name, url: action.payload.url, icon: action.payload.icon }];
      return {
        ...state,
        status: action.payload?.status,
        validation: action.payload?.validation ?? [],
      };
    case MenuActionType.REMOVE_MENU:
      return {
        ...state,
        menus: MapStateReducers.removeItemStateList(
          state?.menus,
          action.payload
        ),
      };
    default:
      return state;
  }
};

export { menuReducer };
export type { MenuStoreState };
