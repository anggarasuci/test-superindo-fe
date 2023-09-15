import { InitStore } from "src/domain/store/init-store";

const initTypesUseCase = async (
  store: InitStore,
  name?: string | ""
) => {
  await store.initTypes(name);
};

export { initTypesUseCase };
