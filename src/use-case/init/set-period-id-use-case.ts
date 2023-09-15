import { InitStore } from "src/domain/store/init-store";

const setPeriodIdUseCase = async (
  store: InitStore,
  id: number
) => {
  await store.setPeriodId(id);
};

export { setPeriodIdUseCase };
