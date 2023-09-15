import type { AnyAction } from "redux";
import { UploadSurveysStore } from "src/domain/store/upload-surveys-store";
import { UploadSurveysActionType } from "../action-type/upload-surveys-action-type";

type UploadSurveysStoreState = Omit<
  UploadSurveysStore,
  "getUploadSurveys" | 
  "getUploadSurveysById"
>;

const INITIAL_STATE: UploadSurveysStoreState = {
  uploadSurveys: undefined,
  uploadSurveysById: undefined,
  validation: undefined,
  status: undefined,
};

const uploadSurveysReducer = (
  state: UploadSurveysStoreState = INITIAL_STATE,
  action: AnyAction
) => {
  switch (action.type) {
    case UploadSurveysActionType.GET_UPLOAD_SURVEYS:
        return {
        ...state,
        uploadSurveys: action?.payload?.data ?? [],
        status: action?.payload?.status,
        validation: action?.payload?.validation ?? [],
        };
    case UploadSurveysActionType.GET_UPLOAD_SURVEYS_BY_ID:
        return {
            ...state,
            uploadSurveysById: action?.payload?.data ?? {},
            status: action?.payload?.status,
            validation: action?.payload?.validation ?? [],
        };
    default:
      return state;
  }
};

export { uploadSurveysReducer };
export type { UploadSurveysStoreState };
