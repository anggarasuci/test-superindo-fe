import type { AnyAction } from "redux";
import { TypeStore } from "src/domain/store/type-store";
import { MapStateReducers } from "src/helpers/map-state-reducers";
import { TypeActionType } from "../action-type/type-action-type";

type TypeStoreState = Omit<
  TypeStore,
  "getTypes"
>;

const INITIAL_STATE: TypeStoreState = {
  types: undefined,
  typeById: undefined,
  validation: undefined,
  status: undefined,
};

const typeReducer = (
  state: TypeStoreState = INITIAL_STATE,
  action: AnyAction
) => {
  switch (action.type) {
    case TypeActionType.GET_TYPES:
      return {
        ...state,
        types: action.payload.data ?? [],
        status: action?.payload?.status,
        validation: action?.payload?.validation ?? [],
      };
    default:
      return state;
  }
};

export { typeReducer };
export type { TypeStoreState };
