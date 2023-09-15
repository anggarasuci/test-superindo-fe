import { ResultRegencyStore } from "src/domain/store/result-regency-store";

const getResultRegencyUseCase = async (
  store: ResultRegencyStore,
  province?: string | "",
  regency?: string | "",
  period?: string | "",
  type?: string | "",
  isTop?: boolean | false,
) => {
  await store.getResult(province, regency, period, type, isTop);
};

export { getResultRegencyUseCase };
