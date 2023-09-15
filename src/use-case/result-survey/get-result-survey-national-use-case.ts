import { RequestResultNationalEntity } from "src/domain/entity/result-national-entity";
import { ResultSurveyStore } from "src/domain/store/result-survey-store";

const getResultSurveyNationalUseCase = async (
  store: ResultSurveyStore,
  party?: string,
  groupPeriodSurvey?: string
) => {
  await store.getResultSurveyNational(
    createParams((party = party), (groupPeriodSurvey = groupPeriodSurvey))
  );
};

const createParams = (
  party?: string,
  groupPeriodSurvey?: string
): RequestResultNationalEntity => {
  let result: RequestResultNationalEntity = {
    party: party,
    group_period_survey: groupPeriodSurvey,
  };
  return result;
};

export { getResultSurveyNationalUseCase };
