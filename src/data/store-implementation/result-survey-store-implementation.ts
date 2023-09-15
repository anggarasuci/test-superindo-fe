import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RequestResultNationalEntity } from "src/domain/entity/result-national-entity";
import { RequestResultSurveyEntity } from "src/domain/entity/result-survey-entity";
import { ResultSurveyStore } from "src/domain/store/result-survey-store";
import { ResultSurveyAction } from "../action/result-survey-action";
import { ResultSurveyStoreState } from "../reducer/result-survey-reducer";
import type { AppRootState } from "./app-store-implementation";

const resultSurveySelector = (state: AppRootState) => state.resultSurvey;

const resultSurveyStoreImplementation = (): ResultSurveyStore => {
  const { resultSurveys, resultSurveyNationals, validation, status } =
    useSelector<AppRootState, ResultSurveyStoreState>(resultSurveySelector);
  const dispatch = useDispatch();

  //overidde from store
  const getResultSurvey = useCallback(
    (requestEntity: RequestResultSurveyEntity) =>
      ResultSurveyAction.getResultSurveyAction(requestEntity)(dispatch),
    [dispatch]
  );
  const getResultSurveyNational = useCallback(
    (requestEntity: RequestResultNationalEntity) =>
      ResultSurveyAction.getResultSurveyNationalAction(requestEntity)(dispatch),
    [dispatch]
  );

  return {
    resultSurveys,
    resultSurveyNationals,
    validation,
    status,
    getResultSurvey,
    getResultSurveyNational,
  };
};

export { resultSurveyStoreImplementation, resultSurveySelector };
