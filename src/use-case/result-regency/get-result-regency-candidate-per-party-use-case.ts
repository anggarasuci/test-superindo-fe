import { ResultRegencyStore } from "src/domain/store/result-regency-store";

const getResultRegencyCandidatePerPartyUseCase = async (
  store: ResultRegencyStore,
  regency?: string | "",
  party?: string | "",
  period?: string | "",
  type?: string | ""
) => {
  await store.getResultCandidatePerParty(regency, party, period, type);
};

export { getResultRegencyCandidatePerPartyUseCase };
