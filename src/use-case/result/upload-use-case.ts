import {
  UploadDataEntity,
  UploadEntity
} from "src/domain/entity/upload-entity";
import { ResultStore } from "src/domain/store/result-store";

const uploadUseCase = async (
  store: ResultStore,
  type: string,
  period: string,
  data: UploadDataEntity[]
) => {
  await store.upload(
    createParams((type = type), (period = period), (data = data))
  );
};

const createParams = (
  type: string,
  period: string,
  data: UploadDataEntity[]
): UploadEntity => {
  let result: UploadEntity = {
    period: period,
    type: type,
    data: data,
  };
  return result;
};

export { uploadUseCase };
