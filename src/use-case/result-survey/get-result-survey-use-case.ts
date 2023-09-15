import { RequestResultSurveyEntity } from "src/domain/entity/result-survey-entity";
import { ResultSurveyStore } from "src/domain/store/result-survey-store";

const getResultSurveyUseCase = async (
  store: ResultSurveyStore,
  displayBy: "party" | "candidate",
  province?: string,
  dapil?: string,
  party?: string,
  institution?: string,
  period?: string,
  type?: string,
  groupPeriod?: string
) => {
  await store.getResultSurvey(
    createParams(
      (displayBy = displayBy),
      (province = province),
      (dapil = dapil),
      (party = party),
      (institution = institution),
      (period = period),
      (type = type),
      (groupPeriod = groupPeriod)
    )
  );
};

const createParams = (
  displayBy: "party" | "candidate",
  province?: string,
  dapil?: string,
  party?: string,
  institution?: string,
  period?: string,
  type?: string,
  groupPeriod?: string
): RequestResultSurveyEntity => {
  let result: RequestResultSurveyEntity = {
    displayBy: displayBy,
    dapil: dapil,
    period: period,
    type: type,
    province: province,
    party: party,
    institution: institution,
    group_period_survey: groupPeriod
  };
  return result;
};

export { getResultSurveyUseCase };
