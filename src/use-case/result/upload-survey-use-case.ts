import {
  UploadDataSurveyEntity,
  UploadSurveyEntity,
} from "src/domain/entity/upload-entity";
import { ResultStore } from "src/domain/store/result-store";

const uploadSurveyUseCase = async (
  store: ResultStore,
  type: string,
  period: string,
  data: UploadDataSurveyEntity[],
  dapil: string
) => {
  await store.uploadSurvey(
    createParams(
      (type = type),
      (period = period),
      (data = data),
      (dapil = dapil)
    )
  );
};

const createParams = (
  type: string,
  period: string,
  data: UploadDataSurveyEntity[],
  dapil: string
): UploadSurveyEntity => {
  let result: UploadSurveyEntity = {
    dapil: dapil,
    period: period,
    type: type,
    data: data,
  };
  return result;
};

export { uploadSurveyUseCase };
