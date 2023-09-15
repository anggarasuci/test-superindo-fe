import { InitStore } from "src/domain/store/init-store";

const setTypeIdUseCase = async (
  store: InitStore,
  id: number
) => {
  await store.setTypeId(id);
};

export { setTypeIdUseCase };
