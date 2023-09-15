import { InitStore } from "src/domain/store/init-store";

const initPeriodsUseCase = async (
  store: InitStore,
  name?: string | ""
) => {
  await store.initPeriods(name);
};

export { initPeriodsUseCase };
