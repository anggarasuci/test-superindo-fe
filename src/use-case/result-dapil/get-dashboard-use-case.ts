import { ResultDapilStore } from "src/domain/store/result-dapil-store";

const getDashboardUseCase = async (
  store: ResultDapilStore,
  period: string,
  type: string
) => {
  await store.getDashboard(period, type);
};

export { getDashboardUseCase };
