import {
  UploadDataWinnerEntity,
  UploadWinnerEntity,
} from "src/domain/entity/upload-entity";
import { ResultStore } from "src/domain/store/result-store";

const uploadWinnerUseCase = async (
  store: ResultStore,
  type: string,
  period: string,
  data: UploadDataWinnerEntity[]
) => {
  await store.uploadWinner(
    createParams((type = type), (period = period), (data = data))
  );
};

const createParams = (
  type: string,
  period: string,
  data: UploadDataWinnerEntity[]
): UploadWinnerEntity => {
  let result: UploadWinnerEntity = {
    period: period,
    type: type,
    data: data,
  };
  return result;
};

export { uploadWinnerUseCase };
