import { SyncSurveyEntity } from "src/domain/entity/sync-entity";
import { ResultStore } from "src/domain/store/result-store";

const syncSurveyDataUseCase = async (store: ResultStore) => {
  await store.syncSurveyData(createParams());
};

const createParams = (): SyncSurveyEntity => {
  let result: SyncSurveyEntity = {
    survey: 1,
    national: 1
  };
  return result;
};

export { syncSurveyDataUseCase };
