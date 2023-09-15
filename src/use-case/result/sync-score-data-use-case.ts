import { SyncScoreEntity } from "src/domain/entity/sync-entity";
import { ResultStore } from "src/domain/store/result-store";

const syncScoreDataUseCase = async (store: ResultStore) => {
  await store.syncScoreData(createParams());
};

const createParams = (): SyncScoreEntity => {
  let result: SyncScoreEntity = {
    score: 1,
  };
  return result;
};

export { syncScoreDataUseCase };
