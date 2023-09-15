import { ResultDapilStore } from "src/domain/store/result-dapil-store";

const getResultDapilCandidateUseCase = async (
  store: ResultDapilStore,
  dapil?: string | "",
  period?: string | "",
  type?: string | "",
  province?: string | "",
  party?: string | "",
  start?: string | "",
  end?: string | ""
) => {
  await store.getResultCandidate(dapil, period, type, province, party, start, end);
};

export { getResultDapilCandidateUseCase };
