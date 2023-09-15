import { ResultProvinceStore } from "src/domain/store/result-province-store";

const getResultProvinceUseCase = async (
  store: ResultProvinceStore,
  province?: string | "",
  period?: string | "",
  type?: string | ""
) => {
  await store.getResult(province, period, type);
};

export { getResultProvinceUseCase };
