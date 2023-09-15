import { SettingActionType } from "../action-type/setting-action-type";
import { UploadSurveysRepository } from "src/domain/repository/upload-surveys-repository";
import { UploadSurveysActionType } from "../action-type/upload-surveys-action-type";

const getUploadSurveysAction =
  (dapil: string) => async (dispatch: any) => {
    dispatch({ type: SettingActionType.SET_LOADING, isLoading: true });
    const response = await UploadSurveysRepository.getUploadSurveys(
      dapil
    );
    dispatch({
      type: UploadSurveysActionType.GET_UPLOAD_SURVEYS,
      payload: response,
    });
    dispatch({ type: SettingActionType.SET_LOADING, isLoading: false });
    return response;
  };

const getUploadSurveysByIdAction =
  (id: string) => async (dispatch: any) => {
    dispatch({ type: SettingActionType.SET_LOADING, isLoading: true });
    const response = await UploadSurveysRepository.getUploadSurveysById(
      id
    );
    dispatch({
      type: UploadSurveysActionType.GET_UPLOAD_SURVEYS_BY_ID,
      payload: response,
    });
    dispatch({ type: SettingActionType.SET_LOADING, isLoading: false });
    return response;
  };

export const UploadSurveysAction = { getUploadSurveysAction, getUploadSurveysByIdAction };
