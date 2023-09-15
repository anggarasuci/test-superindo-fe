import { ResultProvinceStore } from "src/domain/store/result-province-store";

const getResultProvinceCandidateUseCase = async (
  store: ResultProvinceStore,
  province?: string | "",
  period?: string | "",
  type?: string | ""
) => {
  await store.getResultCandidate(province, period, type);
};

export { getResultProvinceCandidateUseCase };
