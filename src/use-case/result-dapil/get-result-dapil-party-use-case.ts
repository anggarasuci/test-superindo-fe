import { ResultDapilStore } from "src/domain/store/result-dapil-store";

const getResultDapilPartyUseCase = async (
  store: ResultDapilStore,
  dapil?: string | "",
  period?: string | "",
  type?: string | ""
) => {
  await store.getResultParty(dapil, period, type);
};

export { getResultDapilPartyUseCase };
