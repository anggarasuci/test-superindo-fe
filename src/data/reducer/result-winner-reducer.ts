import type { AnyAction } from "redux";
import { ResultWinnerStore } from "src/domain/store/result-winner-store";
import { ResultWinnerActionType } from "../action-type/result-winner-action-type";

type ResultWinnerStoreState = Omit<
  ResultWinnerStore,
  "getResultWinner"
>;

const INITIAL_STATE: ResultWinnerStoreState = {
  results_winners: undefined,
  validation: undefined,
  status: undefined,
};

const resultWinnerReducer = (
  state: ResultWinnerStoreState = INITIAL_STATE,
  action: AnyAction
) => {
  switch (action.type) {
    case ResultWinnerActionType.GET_RESULT_WINNER:
      return {
        ...state,
        results_winners: action?.payload?.data ?? [],
        status: action?.payload?.status,
        validation: action?.payload?.validation ?? [],
      };
    default:
      return state;
  }
};

export { resultWinnerReducer };
export type { ResultWinnerStoreState };

