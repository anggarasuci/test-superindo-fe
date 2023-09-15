import { BaseDapilStore } from "src/domain/store/base-dapil-store";

const getBaseDapilUseCase = async (
  store: BaseDapilStore,
  name?: string | ""
) => {
  await store.getBaseDapils(name);
};

export { getBaseDapilUseCase };
