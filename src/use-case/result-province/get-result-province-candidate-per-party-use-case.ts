import { ResultProvinceStore } from "src/domain/store/result-province-store";

const getResultProvinceCandidatePerPartyUseCase = async (
  store: ResultProvinceStore,
  province?: string | "",
  partyId?: string | "",
  period?: string | "",
  type?: string | ""
) => {
  await store.getResultCandidatePerParty(province, partyId, period, type);
};

export { getResultProvinceCandidatePerPartyUseCase };
