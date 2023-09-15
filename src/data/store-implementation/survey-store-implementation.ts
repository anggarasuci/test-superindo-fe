import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PdfSurveyEntity } from "src/domain/entity/survey-entity";
import { SurveyStore } from "src/domain/store/survey-store";
import { SurveyAction } from "../action/survey-action";
import { SurveyStoreState } from "../reducer/survey-reducer";
import type { AppRootState } from "./app-store-implementation";

const surveySelector = (state: AppRootState) => state.survey;

const surveyStoreImplementation = (): SurveyStore => {
  const { pdfResult, validation, status, uploadResults } = useSelector<
    AppRootState,
    SurveyStoreState
  >(surveySelector);
  const dispatch = useDispatch();

  //overidde from store
  const uploadPdf = useCallback(
    (request: PdfSurveyEntity) =>
      SurveyAction.uploadPdfAction(request)(dispatch),
    [dispatch]
  );

  const getUploadSurveys = useCallback(
    (name?: string) => SurveyAction.getUploadSurveysAction(name)(dispatch),
    [dispatch]
  );

  const removeUploadSurvey = useCallback(
    (id: string) => SurveyAction.removeUploadSurveyAction(id)(dispatch),
    [dispatch]
  );

  return {
    pdfResult,
    validation,
    status,
    uploadResults,
    uploadPdf,
    getUploadSurveys,
    removeUploadSurvey,
  };
};

export { surveyStoreImplementation, surveySelector };
