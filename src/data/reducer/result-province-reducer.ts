import type { AnyAction } from "redux";
import { ResultProvinceStore } from "src/domain/store/result-province-store";
import { ResultProvinceActionType } from "../action-type/result-province-action-type";

type ResultProvinceStoreState = Omit<
  ResultProvinceStore,
  "getResult" | "getResultPerParty" | "getResultCandidate" | "getResultCandidatePerParty"
>;

const INITIAL_STATE: ResultProvinceStoreState = {
  results_province: undefined,
  results_province_candidate: undefined,
  results_province_candidate_per_party: undefined,
  results_province_per_party: undefined,
  validation: undefined,
  status: undefined,
};

const resultProvinceReducer = (
  state: ResultProvinceStoreState = INITIAL_STATE,
  action: AnyAction
) => {
  switch (action.type) {
    case ResultProvinceActionType.GET_RESULT_PROVINCE:
      return {
        ...state,
        results_province: action?.payload?.data ?? [],
        status: action?.payload?.status,
        validation: action?.payload?.validation ?? [],
      };
    case ResultProvinceActionType.GET_RESULT_PROVINCE_PER_PARTY:
      return {
        ...state,
        results_province_per_party: action?.payload?.data ?? [],
        status: action?.payload?.status,
        validation: action?.payload?.validation ?? [],
      };
    case ResultProvinceActionType.GET_RESULT_PROVINCE_CANDIDATE:
      return {
        ...state,
        results_province_candidate: action?.payload?.data ?? [],
        status: action?.payload?.status,
        validation: action?.payload?.validation ?? [],
      };
    case ResultProvinceActionType.GET_RESULT_PROVINCE_CANDIDATE_PER_PARTY:
      return {
        ...state,
        results_province_candidate_per_party: action?.payload?.data ?? [],
        status: action?.payload?.status,
        validation: action?.payload?.validation ?? [],
      };
    default:
      return state;
  }
};

export { resultProvinceReducer };
export type { ResultProvinceStoreState };
