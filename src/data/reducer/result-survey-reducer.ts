import type { AnyAction } from "redux";
import { ResultSurveyStore } from "src/domain/store/result-survey-store";
import { ResultSurveyActionType } from "../action-type/result-survey-action-type";

type ResultSurveyStoreState = Omit<
  ResultSurveyStore,
  "getResultSurvey" | "getResultSurveyNational"
>;

const INITIAL_STATE: ResultSurveyStoreState = {
  resultSurveys: undefined,
  resultSurveyNationals: undefined,
  validation: undefined,
  status: undefined,
};

const resultSurveyReducer = (
  state: ResultSurveyStoreState = INITIAL_STATE,
  action: AnyAction
) => {
  switch (action.type) {
    case ResultSurveyActionType.GET_RESULT_SURVEY:
      return {
        ...state,
        resultSurveys: action?.payload?.data ?? [],
        status: action?.payload?.status,
        validation: action?.payload?.validation ?? [],
      };
    case ResultSurveyActionType.GET_RESULT_SURVEY_NATIONAL:
      return {
        ...state,
        resultSurveyNationals: action?.payload?.data ?? [],
        status: action?.payload?.status,
        validation: action?.payload?.validation ?? [],
      };
    default:
      return state;
  }
};

export { resultSurveyReducer };
export type { ResultSurveyStoreState };
