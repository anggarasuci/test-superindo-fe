import { ResultDapilStore } from "src/domain/store/result-dapil-store";

const getResultCandidateScoreUseCase = async (
  store: ResultDapilStore,
  period: string,
  type: string,
  dapil?: string | "0",
  candidate?: string | "0",
  province?: string | "0",
  party?: string | "0"
) => {
  await store.getResultCandidateScore(
    candidate ?? "0",
    dapil ?? "0",
    period,
    type,
    province ?? "0",
    party ?? "0"
  );
};

export { getResultCandidateScoreUseCase };
