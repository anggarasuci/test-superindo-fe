import { CandidateStore } from "src/domain/store/candidate-store";

const getCandidateByPartyUseCase = async (
  store: CandidateStore,
  partyId: string,
  candidateName: string,
) => {
  await store.getCandidateByParty(partyId, candidateName);
};

export { getCandidateByPartyUseCase };
