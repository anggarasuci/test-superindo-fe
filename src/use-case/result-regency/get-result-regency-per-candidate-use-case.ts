import { ResultRegencyStore } from "src/domain/store/result-regency-store";

const getResultRegencyPerCandidateUseCase = async (
  store: ResultRegencyStore,
  regency?: string | "",
  candidate?: string | "",
  period?: string | "",
  type?: string | ""
) => {
  await store.getResultPerCandidate(regency, candidate, period, type);
};

export { getResultRegencyPerCandidateUseCase };
