import type { AnyAction } from "redux";
import { DapilStore } from "src/domain/store/dapil-store";
import { MapStateReducers } from "src/helpers/map-state-reducers";
import { DapilActionType } from "../action-type/dapil-action-type";

type DapilStoreState = Omit<
  DapilStore,
  "getDapils" | "getDapilById" | "submit" | "remove"
>;

const INITIAL_STATE: DapilStoreState = {
  dapils: undefined,
  dapilById: undefined,
  validation: undefined,
  status: undefined,
};

const dapilReducer = (
  state: DapilStoreState = INITIAL_STATE,
  action: AnyAction
) => {
  if (action.payload?.status?.isError)
    return {
      ...state,
      status: action.payload?.status,
      validation: action.payload?.validation ?? [],
    };

  switch (action.type) {
    case DapilActionType.GET_DAPILS:
      return {
        ...state,
        dapils: action.payload.data ?? [],
        status: action?.payload?.status,
        validation: action?.payload?.validation ?? [],
      };
    case DapilActionType.GET_DAPIL_BY_ID:
      return {
        ...state,
        dapilById: action.payload.data ?? {},
        status: action?.payload?.status,
        validation: action?.payload?.validation ?? [],
      };
    case DapilActionType.SUBMIT_DAPIL:
      return {
        ...state,
        status: action.payload?.status,
        validation: action.payload?.validation ?? [],
      };
    case DapilActionType.UPDATE_DAPIL:
      return {
        ...state,
        status: action.payload?.status,
        validation: action.payload?.validation ?? [],
      };
    case DapilActionType.REMOVE_DAPIL:
      return {
        ...state,
        dapils: MapStateReducers.removeItemStateList(
          state?.dapils,
          action.payload
        ),
      };
    default:
      return state;
  }
};

export { dapilReducer };
export type { DapilStoreState };
