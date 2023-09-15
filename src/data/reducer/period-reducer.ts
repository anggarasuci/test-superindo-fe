import type { AnyAction } from "redux";
import { PeriodStore } from "src/domain/store/period-store";
import { MapStateReducers } from "src/helpers/map-state-reducers";
import { PeriodActionType } from "../action-type/period-action-type";

type PeriodStoreState = Omit<
  PeriodStore,
  "getPeriods"
>;

const INITIAL_STATE: PeriodStoreState = {
  periods: undefined,
  periodById: undefined,
  validation: undefined,
  status: undefined,
};

const periodReducer = (
  state: PeriodStoreState = INITIAL_STATE,
  action: AnyAction
) => {
  switch (action.type) {
    case PeriodActionType.GET_PERIODS:
      return {
        ...state,
        periods: action.payload.data ?? [],
        status: action?.payload?.status,
        validation: action?.payload?.validation ?? [],
      };
    default:
      return state;
  }
};

export { periodReducer };
export type { PeriodStoreState };
