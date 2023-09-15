import type { AnyAction } from "redux";
import { GroupStore } from "src/domain/store/group-store";
import { MapStateReducers } from "src/helpers/map-state-reducers";
import { GroupActionType } from "../action-type/group-action-type";

type GroupStoreState = Omit<
  GroupStore,
  "getGroups" | "submit" | "remove"
>;

const INITIAL_STATE: GroupStoreState = {
  groups: undefined,
  groupById: undefined,
  validation: undefined,
  status: undefined,
};

const groupReducer = (
  state: GroupStoreState = INITIAL_STATE,
  action: AnyAction
) => {
  switch (action.type) {
    case GroupActionType.GET_GROUPS:
      return {
        ...state,
        groups: action.payload.data ?? [],
        status: action?.payload?.status,
        validation: action?.payload?.validation ?? [],
      };
    case GroupActionType.SUBMIT_GROUP:
      if (action.payload?.status?.isError) {
        return {
          ...state,
          status: action.payload?.status,
          validation: action?.payload?.validation
        }
      }
      const item = { id: action.payload.id, name: action.payload.name, menus: action.payload.menus };
      if (!item) {
        return {
          ...state
        }
      }
      return {
        ...state,
        groups: MapStateReducers.addItemStateList(state?.groups, item),
      };
    case GroupActionType.UPDATE_GROUP:
      if (action.payload?.status?.isError) {
        return {
          ...state,
          status: action.payload?.status,
          validation: action?.payload?.validation
        }
      }
      const items = [{ id: action.payload.id, name: action.payload.name, menus: action.payload.menus }];
      if (!item) {
        return {
          ...state
        }
      }
      return {
        ...state,
        groups: MapStateReducers.updateStateList(state?.groups, items),
      };
    case GroupActionType.REMOVE_GROUP:
      return {
        ...state,
        groups: MapStateReducers.removeItemStateList(
          state?.groups,
          action.payload
        ),
      };
    default:
      return state;
  }
};

export { groupReducer };
export type { GroupStoreState };
