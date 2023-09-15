import { SyncEntity } from "src/domain/entity/sync-entity";
import { ResultStore } from "src/domain/store/result-store";

const syncDataUseCase = async (store: ResultStore) => {
  await store.syncData(createParams());
};

const createParams = (): SyncEntity => {
  let result: SyncEntity = {
    province: 1,
    regency: 1,
    district: 0,
    village: 0,
    tps: 0,
    dapil: 1,
  };
  return result;
};

export { syncDataUseCase };
