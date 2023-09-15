import type { AnyAction } from "redux";
import { ResultRegencyStore } from "src/domain/store/result-regency-store";
import { ResultRegencyActionType } from "../action-type/result-regency-action-type";

type ResultRegencyStoreState = Omit<
  ResultRegencyStore,
  "getResult" | "getResultCandidate" | "getResultPerCandidate" | "getResultCandidatePerParty" | "getResultPerParty"
>;

const INITIAL_STATE: ResultRegencyStoreState = {
  results_regency: undefined,
  results_regency_per_party: undefined,
  results_regency_candidates: undefined,
  results_regency_per_candidate: undefined,
  results_regency_candidate_per_party: undefined,
  validation: undefined,
  status: undefined,
};

const resultRegencyReducer = (
  state: ResultRegencyStoreState = INITIAL_STATE,
  action: AnyAction
) => {
  switch (action.type) {
    case ResultRegencyActionType.GET_RESULT_REGENCY:
      return {
        ...state,
        results_regency: action?.payload?.data ?? [],
        status: action?.payload?.status,
        validation: action?.payload?.validation ?? [],
      };
    case ResultRegencyActionType.GET_RESULT_REGENCY_CANDIDATE:
      return {
        ...state,
        results_regency_candidates: action?.payload?.data ?? [],
        status: action?.payload?.status,
        validation: action?.payload?.validation ?? [],
      };
    case ResultRegencyActionType.GET_RESULT_REGENCY_PER_PARTY:
      return {
        ...state,
        results_regency_per_party: action?.payload?.data ?? [],
        status: action?.payload?.status,
        validation: action?.payload?.validation ?? [],
      };
    case ResultRegencyActionType.GET_RESULT_REGENCY_PER_CANDIDATE:
      return {
        ...state,
        results_regency_per_candidate: action?.payload?.data ?? [],
        status: action?.payload?.status,
        validation: action?.payload?.validation ?? [],
      };
    case ResultRegencyActionType.GET_RESULT_REGENCY_CANDIDATE_PER_PARTY:
      return {
        ...state,
        results_regency_candidate_per_party: action?.payload?.data ?? [],
        status: action?.payload?.status,
        validation: action?.payload?.validation ?? [],
      };
    default:
      return state;
  }
};

export { resultRegencyReducer };
export type { ResultRegencyStoreState };
