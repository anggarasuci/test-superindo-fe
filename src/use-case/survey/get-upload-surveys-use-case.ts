import { SurveyStore } from "src/domain/store/survey-store";

const getUploadSurveysUseCase = async (store: SurveyStore, name?: string) => {
  await store.getUploadSurveys(name);
};

export { getUploadSurveysUseCase };
