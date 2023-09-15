import { ResultDapilStore } from "src/domain/store/result-dapil-store";

const removeResultCandidateScoreUseCase = async (
  store: ResultDapilStore,
  id: number
) => {
  await store.removeResultCandidateScore(id);
};

export { removeResultCandidateScoreUseCase };
