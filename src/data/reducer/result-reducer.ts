import type { AnyAction } from "redux";
import { ResultStore } from "src/domain/store/result-store";
import { ResultActionType } from "../action-type/result-action-type";

type ResultStoreState = Omit<
  ResultStore,
  | "upload"
  | "syncData"
  | "uploadWinner"
  | "uploadSurvey"
  | "syncSurveyData"
  | "uploadScore"
  | "syncScoreData"
>;

const INITIAL_STATE: ResultStoreState = {
  validation: undefined,
  status: undefined,
};

const resultReducer = (
  state: ResultStoreState = INITIAL_STATE,
  action: AnyAction
) => {
  switch (action.type) {
    case ResultActionType.UPLOAD:
      return {
        ...state,
        status: action.payload?.status,
        validation: action.payload?.validation,
      };
    case ResultActionType.SYNC_DATA:
      return {
        ...state,
        status: action.payload?.status,
        validation: action.payload?.validation,
      };
    case ResultActionType.UPLOAD_WINNER:
      return {
        ...state,
        status: action.payload?.status,
        validation: action.payload?.validation,
      };
    case ResultActionType.UPLOAD_SURVEY:
      return {
        ...state,
        status: action.payload?.status,
        validation: action.payload?.validation,
      };
    case ResultActionType.SYNC_SURVEY_DATA:
      return {
        ...state,
        status: action.payload?.status,
        validation: action.payload?.validation,
      };
    case ResultActionType.UPLOAD_SCORE:
      return {
        ...state,
        status: action.payload?.status,
        validation: action.payload?.validation,
      };
    case ResultActionType.SYNC_SCORE_DATA:
      return {
        ...state,
        status: action.payload?.status,
        validation: action.payload?.validation,
      };
    default:
      return state;
  }
};

export { resultReducer };
export type { ResultStoreState };
