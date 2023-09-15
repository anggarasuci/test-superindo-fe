import { SurveyStore } from "src/domain/store/survey-store";

const removeUploadPdfUseCase = async (store: SurveyStore, id: string) => {
  await store.removeUploadSurvey(id);
};

export { removeUploadPdfUseCase };
