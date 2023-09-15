import { ResultRegencyStore } from "src/domain/store/result-regency-store";

const getResultRegencyCandidateUseCase = async (
  store: ResultRegencyStore,
  province?: string | "",
  regency?: string | "",
  period?: string | "",
  type?: string | ""
) => {
  await store.getResultCandidate(province, regency, period, type);
};

export { getResultRegencyCandidateUseCase };
