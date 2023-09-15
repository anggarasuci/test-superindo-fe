import type { AnyAction } from "redux";
import { BaseDapilStore } from "src/domain/store/base-dapil-store";
import { BaseDapilActionType } from "../action-type/base-dapil-action-type";

type BaseDapilStoreState = Omit<
  BaseDapilStore,
  "getBaseDapils" | "updateAdditionalField"
>;

const INITIAL_STATE: BaseDapilStoreState = {
  basedapils: undefined,
  basedapilById: undefined,
  validation: undefined,
  status: undefined,
};

const basedapilReducer = (
  state: BaseDapilStoreState = INITIAL_STATE,
  action: AnyAction
) => {
  switch (action.type) {
    case BaseDapilActionType.GET_BASEDAPILS:
      return {
        ...state,
        basedapils: action.payload.data ?? [],
        status: action?.payload?.status,
        validation: action?.payload?.validation ?? [],
      };
    case BaseDapilActionType.UPDATE_ADDITIONAL_FIELD:
      return {
        ...state,
        status: action?.payload?.status,
        validation: action?.payload?.validation ?? [],
      };
    default:
      return state;
  }
};

export { basedapilReducer };
export type { BaseDapilStoreState };
