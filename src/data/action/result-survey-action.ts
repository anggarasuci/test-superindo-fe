import { RequestResultNationalEntity } from "src/domain/entity/result-national-entity";
import { RequestResultSurveyEntity } from "src/domain/entity/result-survey-entity";
import { ResultSurveyRepository } from "src/domain/repository/result-survey-repository";
import { ResultSurveyActionType } from "../action-type/result-survey-action-type";
import { SettingActionType } from "../action-type/setting-action-type";

const getResultSurveyAction =
  (requestEntity: RequestResultSurveyEntity) => async (dispatch: any) => {
    dispatch({ type: SettingActionType.SET_LOADING, isLoading: true });
    const response = await ResultSurveyRepository.getResultSurvey(
      requestEntity
    );
    dispatch({
      type: ResultSurveyActionType.GET_RESULT_SURVEY,
      payload: response,
    });
    dispatch({ type: SettingActionType.SET_LOADING, isLoading: false });
    return response;
  };

const getResultSurveyNationalAction =
  (requestEntity: RequestResultNationalEntity) => async (dispatch: any) => {
    dispatch({ type: SettingActionType.SET_LOADING, isLoading: true });
    const response = await ResultSurveyRepository.getResultSurveyNational(
      requestEntity
    );
    dispatch({
      type: ResultSurveyActionType.GET_RESULT_SURVEY_NATIONAL,
      payload: response,
    });
    dispatch({ type: SettingActionType.SET_LOADING, isLoading: false });
    return response;
  };

export const ResultSurveyAction = {
  getResultSurveyAction,
  getResultSurveyNationalAction,
};
