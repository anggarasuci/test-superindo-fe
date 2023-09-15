import type { AnyAction } from "redux";
import { SurveyStore } from "src/domain/store/survey-store";
import { SurveyActionType } from "../action-type/survey-action-type";

type SurveyStoreState = Omit<
  SurveyStore,
  "uploadPdf" | "getUploadSurveys" | "removeUploadSurvey"
>;

const INITIAL_STATE: SurveyStoreState = {
  pdfResult: undefined,
  validation: undefined,
  status: undefined,
  uploadResults: undefined,
};

const surveyReducer = (
  state: SurveyStoreState = INITIAL_STATE,
  action: AnyAction
) => {
  switch (action.type) {
    case SurveyActionType.ATTACH_SURVEY_FILE:
      return {
        ...state,
        pdfResults: action.payload.data ?? {},
      };
    case SurveyActionType.GET_SURVEYS:
      return {
        ...state,
        uploadResults: action.payload.data ?? [],
      };
    case SurveyActionType.REMOVE_SURVEY:
      return {
        ...state,
        pdfResults: action?.payload?.data ?? {},
      };
    default:
      return state;
  }
};

export { surveyReducer };
export type { SurveyStoreState };
