import { DapilStore } from "src/domain/store/dapil-store";

const removeDapilUseCase = async (
  store: DapilStore,
  id: number
) => {
  await store.remove(id);
};

export { removeDapilUseCase };
