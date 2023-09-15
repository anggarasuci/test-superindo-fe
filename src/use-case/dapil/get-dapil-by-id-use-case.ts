import { DapilStore } from "src/domain/store/dapil-store";

const getDapilByIdUseCase = async (
  store: DapilStore,
  id: string
) => {
  await store.getDapilById(id);
};

export { getDapilByIdUseCase };
