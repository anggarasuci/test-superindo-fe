import { ResultDapilStore } from "src/domain/store/result-dapil-store";

const getResultDapilPerCandidateUseCase = async (
  store: ResultDapilStore,
  candidate?: string | "",
  period?: string | "",
  type?: string | ""
) => {
  await store.getResultDapilPerCandidate(candidate, period, type);
};

export { getResultDapilPerCandidateUseCase };
