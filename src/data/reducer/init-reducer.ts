import type { AnyAction } from "redux";
import { InitStore } from "src/domain/store/init-store";
import { InitActionType } from "../action-type/init-action-type";

type InitStoreState = Omit<
  InitStore,
  "initPeriods" | "initTypes" | "initUser" | "setPeriodId" | "setTypeId"
>;

const INITIAL_STATE: InitStoreState = {
  menus: undefined,
  periods: undefined,
  types: undefined,
  user: undefined,
  period_id: undefined,
  type_id: undefined,
  validation: undefined,
  status: undefined,
};

const initReducer = (
  state: InitStoreState = INITIAL_STATE,
  action: AnyAction
) => {
  switch (action.type) {
    case InitActionType.INIT_PERIODS:
      return {
        ...state,
        periods: action.payload?.data ?? [],
        status: action?.payload?.status,
        validation: action?.payload?.validation ?? [],
      };
    case InitActionType.INIT_TYPES:
      return {
        ...state,
        types: action.payload?.data ?? [],
        status: action?.payload?.status,
        validation: action?.payload?.validation ?? [],
      };
    case InitActionType.INIT_USER:
      return {
        ...state,
        user: action.payload?.data[0] ?? {},
        menus: action.payload?.data[0]?.groups[0]?.menus ?? [],
        status: action?.payload?.status,
        validation: action?.payload?.validation ?? [],
      };
    case InitActionType.SET_PERIOD_ID:
      return {
        ...state,
      };
    case InitActionType.SET_TYPE_ID:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export { initReducer };
export type { InitStoreState };
