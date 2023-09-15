import { PdfSurveyEntity } from "src/domain/entity/survey-entity";
import { SurveyRepository } from "src/domain/repository/survey-repository";
import { SettingActionType } from "../action-type/setting-action-type";
import { SurveyActionType } from "../action-type/survey-action-type";

const uploadPdfAction = (request: PdfSurveyEntity) => async (dispatch: any) => {
  dispatch({ type: SettingActionType.SET_LOADING, isLoading: true });
  const response = await SurveyRepository.uploadPdf(request);
  dispatch({
    type: SurveyActionType.ATTACH_SURVEY_FILE,
    payload: response,
  });
  dispatch({ type: SettingActionType.SET_LOADING, isLoading: false });
  return response;
};

const getUploadSurveysAction = (name?: string) => async (dispatch: any) => {
  dispatch({ type: SettingActionType.SET_LOADING, isLoading: true });
  const response = await SurveyRepository.getUploadSurveys(name);
  dispatch({
    type: SurveyActionType.GET_SURVEYS,
    payload: response,
  });
  dispatch({ type: SettingActionType.SET_LOADING, isLoading: false });
  return response;
};

const removeUploadSurveyAction = (id: string) => async (dispatch: any) => {
  dispatch({ type: SettingActionType.SET_LOADING, isLoading: true });
  const response = await SurveyRepository.removeUploadSurvey(id);
  dispatch({
    type: SurveyActionType.REMOVE_SURVEY,
    payload: response,
  });
  dispatch({ type: SettingActionType.SET_LOADING, isLoading: false });
  return response;
};

export const SurveyAction = {
  uploadPdfAction,
  getUploadSurveysAction,
  removeUploadSurveyAction,
};
