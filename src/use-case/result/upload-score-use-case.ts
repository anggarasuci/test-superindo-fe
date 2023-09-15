import {
  UploadDataScoreEntity,
  UploadScoreEntity,
} from "src/domain/entity/upload-entity";
import { ResultStore } from "src/domain/store/result-store";

const uploadScoreUseCase = async (
  store: ResultStore,
  type: string,
  period: string,
  data: UploadDataScoreEntity[]
) => {
  await store.uploadScore(
    createParams((type = type), (period = period), (data = data))
  );
};

const createParams = (
  type: string,
  period: string,
  data: UploadDataScoreEntity[]
): UploadScoreEntity => {
  let result: UploadScoreEntity = {
    period: period,
    type: type,
    data: data,
  };
  return result;
};

export { uploadScoreUseCase };
