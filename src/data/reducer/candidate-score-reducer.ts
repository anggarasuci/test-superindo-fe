import type { AnyAction } from "redux";
import { ScoreStore } from "src/domain/store/candidate-score-store";
import { CandidateScoreActionType } from "../action-type/candidate-score-action-type";

type ScoreStoreState = Omit<ScoreStore, "getScoreByCandidate" | "submit">;

const INITIAL_STATE: ScoreStoreState = {
  scores: undefined,
  validation: undefined,
  status: undefined,
};

const scoreReducer = (
  state: ScoreStoreState = INITIAL_STATE,
  action: AnyAction
) => {
  if (action.payload?.status?.isError)
    return {
      ...state,
      status: action.payload?.status,
      validation: action.payload?.validation ?? [],
    };

  switch (action.type) {
    case CandidateScoreActionType.GET_CANDIDATES_SCORE:
      return {
        ...state,
        scores: action.payload.data ?? [],
        status: action?.payload?.status,
        validation: action?.payload?.validation ?? [],
      };
    case CandidateScoreActionType.SUBMIT_CANDIDATE_SCORE:
      return {
        ...state,
        status: action.payload?.status,
        validation: action.payload?.validation ?? [],
      };
    case CandidateScoreActionType.UPDATE_CANDIDATE_SCORE:
      return {
        ...state,
        status: action.payload?.status,
        validation: action.payload?.validation ?? [],
      };
    default:
      return state;
  }
};

export { scoreReducer };
export type { ScoreStoreState };
