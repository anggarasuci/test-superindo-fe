import { ResultRegencyStore } from "src/domain/store/result-regency-store";

const getResultRegencyPerPartyUseCase = async (
  store: ResultRegencyStore,
  province?: string | "",
  regency?: string | "",
  partyId?: string | "",
  period?: string | "",
  type?: string | ""
) => {
  await store.getResultPerParty(province, regency, partyId, period, type);
};

export { getResultRegencyPerPartyUseCase };
