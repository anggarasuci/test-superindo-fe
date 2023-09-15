import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UploadSurveysStore } from "src/domain/store/upload-surveys-store";
import { UploadSurveysAction } from "../action/upload-surveys-action";
import { UploadSurveysStoreState } from "../reducer/upload-surveys-reducer";
import type { AppRootState } from "./app-store-implementation";

const uploadSurveysSelector = (state: AppRootState) => state.uploadSurveys;

const uploadSurveysStoreImplementation = (): UploadSurveysStore => {
  const { 
    uploadSurveys, 
    validation, 
    uploadSurveysById, 
    status } = useSelector<AppRootState,UploadSurveysStoreState>(uploadSurveysSelector);
  const dispatch = useDispatch();

  //overidde from store
  const getUploadSurveys = useCallback(
    (dapil?: string) => UploadSurveysAction.getUploadSurveysAction(dapil)(dispatch),
    [dispatch]
  );

  const getUploadSurveysById = useCallback(
    (id?: string) => UploadSurveysAction.getUploadSurveysByIdAction(id)(dispatch),
    [dispatch]
  );

  return {
    uploadSurveys,
    uploadSurveysById,
    validation,
    status,
    getUploadSurveys,
    getUploadSurveysById
  };
};

export { uploadSurveysStoreImplementation, uploadSurveysSelector };
