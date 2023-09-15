import { ResultWinnerStore } from "src/domain/store/result-winner-store";

const getResultWinnerUseCase = async (
  store: ResultWinnerStore,
  dapil?: string,
  includeProvince?: boolean,
  province?: string,
  party?: string,
  period?: string,
  type?: string
) => {
  await store.getResultWinner(dapil, includeProvince, province, party, period, type);
};

export { getResultWinnerUseCase };
