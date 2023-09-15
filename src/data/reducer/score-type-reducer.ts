import type { AnyAction } from "redux";
import { ScoreTypeStore } from "src/domain/store/score-type-store";
import { MapStateReducers } from "src/helpers/map-state-reducers";
import { ScoreTypeActionType } from "../action-type/score-type-action-type";

type ScoreTypeStoreState = Omit<
  ScoreTypeStore,
  "getScoreTypes" | "getScoreTypeById" | "submit" | "remove"
>;

const INITIAL_STATE: ScoreTypeStoreState = {
  scoreTypes: undefined,
  scoreType: undefined,
  validation: undefined,
  status: undefined,
};

const scoreTypeReducer = (
  state: ScoreTypeStoreState = INITIAL_STATE,
  action: AnyAction
) => {
  if (action.payload?.status?.isError)
    return {
      ...state,
      status: action.payload?.status,
      validation: action.payload?.validation ?? [],
    };

  switch (action.type) {
    case ScoreTypeActionType.GET_SCORE_TYPES:
      return {
        ...state,
        scoreTypes: action.payload.data ?? [],
        status: action?.payload?.status,
        validation: action?.payload?.validation ?? [],
      };
    case ScoreTypeActionType.GET_SCORE_TYPE_ID:
      return {
        ...state,
        scoreType: action.payload.data ?? {},
        status: action?.payload?.status,
        validation: action?.payload?.validation ?? []
      };
    case ScoreTypeActionType.SUBMIT_SCORE_TYPE:
      return {
        ...state,
        status: action.payload?.status,
        validation: action.payload?.validation ?? [],
      };
    case ScoreTypeActionType.UPDATE_SCORE_TYPE:
      return {
        ...state,
        status: action.payload?.status,
        validation: action.payload?.validation ?? [],
      };
    case ScoreTypeActionType.REMOVE_SCORE_TYPE:
      return {
        ...state,
        scoretypes: MapStateReducers.removeItemStateList(
          state?.scoreTypes,
          action.payload
        ),
      };
    default:
      return state;
  }
};

export { scoreTypeReducer };
export type { ScoreTypeStoreState };
