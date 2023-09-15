import { PeriodStore } from "src/domain/store/period-store";

const getPeriodUseCase = async (
  store: PeriodStore,
  name?: string | ""
) => {
  await store.getPeriods(name);
};

export { getPeriodUseCase };
