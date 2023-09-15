import { UploadSurveysStore } from "src/domain/store/upload-surveys-store";

const getUploadSurveysByIdUseCase = async (
  store: UploadSurveysStore,
  id: string
) => {
  await store.getUploadSurveysById(id);
};

export { getUploadSurveysByIdUseCase };
