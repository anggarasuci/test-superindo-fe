import { CandidateDocumentStore } from "src/domain/store/candidate-document-store";

const getDocumentByCandidateUseCase = async (
  store: CandidateDocumentStore,
  candidateId: number
) => {
  await store.getDocumentByCandidate(candidateId);
};

export { getDocumentByCandidateUseCase };
