import { UploadSurveysStore } from "src/domain/store/upload-surveys-store";

const getUploadSurveysUseCase = async (
  store: UploadSurveysStore,
  dapil: string
) => {
  if (dapil!=="") {
    await store.getUploadSurveys(dapil);
  }
};

export { getUploadSurveysUseCase };
