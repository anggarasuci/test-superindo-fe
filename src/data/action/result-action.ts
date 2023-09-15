import {
  SyncEntity,
  SyncScoreEntity,
  SyncSurveyEntity,
} from "src/domain/entity/sync-entity";
import {
  UploadEntity,
  UploadScoreEntity,
  UploadSurveyEntity,
  UploadWinnerEntity,
} from "src/domain/entity/upload-entity";
import { ResultRepository } from "src/domain/repository/result-repository";
import { ResultActionType } from "../action-type/result-action-type";
import { SettingActionType } from "../action-type/setting-action-type";

const upload = (uploadEntity: UploadEntity) => async (dispatch: any) => {
  dispatch({ type: SettingActionType.SET_LOADING, isLoading: true });
  const response = await ResultRepository.upload(
    ResultActionType.UPLOAD,
    uploadEntity
  );
  dispatch({
    type: ResultActionType.UPLOAD,
    payload: response,
  });
  dispatch({ type: SettingActionType.SET_LOADING, isLoading: false });
  return response;
};

const syncData = (syncEntity: SyncEntity) => async (dispatch: any) => {
  dispatch({ type: SettingActionType.SET_LOADING, isLoading: true });
  const response = await ResultRepository.syncData(
    ResultActionType.SYNC_DATA,
    syncEntity
  );
  dispatch({
    type: ResultActionType.SYNC_DATA,
    payload: response,
  });
  dispatch({ type: SettingActionType.SET_LOADING, isLoading: false });
  return response;
};

const uploadWinner =
  (uploadWinnerEntity: UploadWinnerEntity) => async (dispatch: any) => {
    dispatch({ type: SettingActionType.SET_LOADING, isLoading: true });
    const response = await ResultRepository.uploadWinner(
      ResultActionType.UPLOAD_WINNER,
      uploadWinnerEntity
    );
    dispatch({
      type: ResultActionType.UPLOAD_WINNER,
      payload: response,
    });
    dispatch({ type: SettingActionType.SET_LOADING, isLoading: false });
    return response;
  };

const uploadSurvey =
  (uploadSurveyEntity: UploadSurveyEntity) => async (dispatch: any) => {
    dispatch({ type: SettingActionType.SET_LOADING, isLoading: true });
    const response = await ResultRepository.uploadSurvey(
      ResultActionType.UPLOAD_SURVEY,
      uploadSurveyEntity
    );
    dispatch({
      type: ResultActionType.UPLOAD_SURVEY,
      payload: response,
    });
    dispatch({ type: SettingActionType.SET_LOADING, isLoading: false });
    return response;
  };

const syncSurveyData =
  (syncSurveyEntity: SyncSurveyEntity) => async (dispatch: any) => {
    dispatch({ type: SettingActionType.SET_LOADING, isLoading: true });
    const response = await ResultRepository.syncSurveyData(
      ResultActionType.SYNC_SURVEY_DATA,
      syncSurveyEntity
    );
    dispatch({
      type: ResultActionType.SYNC_SURVEY_DATA,
      payload: response,
    });
    dispatch({ type: SettingActionType.SET_LOADING, isLoading: false });
    return response;
  };

const uploadScore =
  (uploadScoreEntity: UploadScoreEntity) => async (dispatch: any) => {
    dispatch({ type: SettingActionType.SET_LOADING, isLoading: true });
    const response = await ResultRepository.uploadScore(
      ResultActionType.UPLOAD_SCORE,
      uploadScoreEntity
    );
    dispatch({
      type: ResultActionType.UPLOAD_SCORE,
      payload: response,
    });
    dispatch({ type: SettingActionType.SET_LOADING, isLoading: false });
    return response;
  };

const syncScoreData =
  (syncScoreEntity: SyncScoreEntity) => async (dispatch: any) => {
    dispatch({ type: SettingActionType.SET_LOADING, isLoading: true });
    const response = await ResultRepository.syncScoreData(
      ResultActionType.SYNC_SCORE_DATA,
      syncScoreEntity
    );
    dispatch({
      type: ResultActionType.SYNC_SCORE_DATA,
      payload: response,
    });
    dispatch({ type: SettingActionType.SET_LOADING, isLoading: false });
    return response;
  };

export const ResultAction = {
  upload,
  syncData,
  uploadWinner,
  uploadSurvey,
  syncSurveyData,
  uploadScore,
  syncScoreData,
};
