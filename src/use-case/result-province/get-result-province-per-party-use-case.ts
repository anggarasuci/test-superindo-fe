import { ResultProvinceStore } from "src/domain/store/result-province-store";

const getResultProvincePerPartyUseCase = async (
  store: ResultProvinceStore,
  province?: string | "",
  partyId?: string | "",
  period?: string | "",
  type?: string | ""
) => {
  await store.getResultPerParty(province, partyId, period, type);
};

export { getResultProvincePerPartyUseCase };
