import type { AnyAction } from "redux";
import { ResultDapilStore } from "src/domain/store/result-dapil-store";
import { ResultDapilActionType } from "../action-type/result-dapil-action-type";

type ResultDapilStoreState = Omit<
  ResultDapilStore,
  | "getResultParty"
  | "getResultCandidate"
  | "getResultDapilPerCandidate"
  | "getResultRegion"
  | "getResultScore"
  | "getResultCandidateScore"
  | "getDashboard"
  | "removeResultCandidateScore"
>;

const INITIAL_STATE: ResultDapilStoreState = {
  results_dapil_parties: undefined,
  results_dapil_candidates: undefined,
  results_dapil_candidate: undefined,
  validation: undefined,
  status: undefined,
  resultDapilRegions: [],
  resutScores: [],
  resultCandidateScore: [],
  dashboard: undefined,
};

const resultDapilReducer = (
  state: ResultDapilStoreState = INITIAL_STATE,
  action: AnyAction
) => {
  switch (action.type) {
    case ResultDapilActionType.GET_RESULT_DAPIL_PARTY:
      return {
        ...state,
        results_dapil_parties: action?.payload?.data ?? [],
        status: action?.payload?.status,
        validation: action?.payload?.validation ?? [],
      };
    case ResultDapilActionType.GET_RESULT_DAPIL_CANDIDATE:
      return {
        ...state,
        results_dapil_candidates: action?.payload?.data ?? [],
        status: action?.payload?.status,
        validation: action?.payload?.validation ?? [],
      };
    case ResultDapilActionType.GET_RESULT_DAPIL_PER_CANDIDATE:
      return {
        ...state,
        results_dapil_candidate: action?.payload?.data ?? [],
        status: action?.payload?.status,
        validation: action?.payload?.validation ?? [],
      };
    case ResultDapilActionType.GET_RESULT_DAPIL_REGION:
      return {
        ...state,
        resultDapilRegions: action?.payload?.data ?? [],
        status: action?.payload?.status,
        validation: action?.payload?.validation ?? [],
      };
    case ResultDapilActionType.GET_RESULT_DAPIL_SCORE:
      return {
        ...state,
        resutScores: action?.payload?.data ?? [],
        status: action?.payload?.status,
        validation: action?.payload?.validation ?? [],
      };
    case ResultDapilActionType.GET_RESULT_CANDIDATE_SCORE:
      return {
        ...state,
        resultCandidateScore: action?.payload?.data ?? [],
        status: action?.payload?.status,
        validation: action?.payload?.validation ?? [],
      };
    case ResultDapilActionType.GET_DASHBOARD:
      return {
        ...state,
        dashboard: action?.payload?.data ?? [],
        status: action?.payload?.status,
        validation: action?.payload?.validation ?? [],
      };
    case ResultDapilActionType.REMOVE_CANDIDATE_SCORE:
      return {
        ...state,
        dashboard: action?.payload?.data ?? [],
        status: action?.payload?.status,
        validation: action?.payload?.validation ?? [],
      };
    default:
      return state;
  }
};

export { resultDapilReducer };
export type { ResultDapilStoreState };
