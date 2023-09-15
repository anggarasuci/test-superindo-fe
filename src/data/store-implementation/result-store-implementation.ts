import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
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
import { ResultStore } from "src/domain/store/result-store";
import { ResultAction } from "../action/result-action";
import { ResultStoreState } from "../reducer/result-reducer";
import type { AppRootState } from "./app-store-implementation";

const resultSelector = (state: AppRootState) => state.result;

const resultStoreImplementation = (): ResultStore => {
  const { validation, status } = useSelector<AppRootState, ResultStoreState>(
    resultSelector
  );
  const dispatch = useDispatch();

  //overidde from store
  const upload = useCallback(
    (uploadEntity: UploadEntity) => ResultAction.upload(uploadEntity)(dispatch),
    [dispatch]
  );

  const syncData = useCallback(
    (syncEntity: SyncEntity) => ResultAction.syncData(syncEntity)(dispatch),
    [dispatch]
  );

  const uploadWinner = useCallback(
    (uploadWinnerEntity: UploadWinnerEntity) =>
      ResultAction.uploadWinner(uploadWinnerEntity)(dispatch),
    [dispatch]
  );

  const uploadSurvey = useCallback(
    (uploadSurveyEntity: UploadSurveyEntity) =>
      ResultAction.uploadSurvey(uploadSurveyEntity)(dispatch),
    [dispatch]
  );

  const syncSurveyData = useCallback(
    (syncSurveyEntity: SyncSurveyEntity) =>
      ResultAction.syncSurveyData(syncSurveyEntity)(dispatch),
    [dispatch]
  );

  const uploadScore = useCallback(
    (uploadScoreEntity: UploadScoreEntity) =>
      ResultAction.uploadScore(uploadScoreEntity)(dispatch),
    [dispatch]
  );

  const syncScoreData = useCallback(
    (syncScoreEntity: SyncScoreEntity) =>
      ResultAction.syncScoreData(syncScoreEntity)(dispatch),
    [dispatch]
  );

  return {
    validation,
    status,
    upload,
    syncData,
    uploadWinner,
    uploadSurvey,
    syncSurveyData,
    uploadScore,
    syncScoreData,
  };
};

export { resultStoreImplementation, resultSelector };
