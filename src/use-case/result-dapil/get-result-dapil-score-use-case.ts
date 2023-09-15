import { ResultDapilStore } from "src/domain/store/result-dapil-store";

const getResultDapilScoreUseCase = async (
  store: ResultDapilStore,
  period: string,
  type: string,
  dapil?: string | "0",
  party?: string
) => {
  await store.getResultScore(dapil ?? "0", period, type, party);
};

export { getResultDapilScoreUseCase };
