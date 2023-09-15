import { CandidateDocumentStore } from "src/domain/store/candidate-document-store";

const removeCandidateDocumentUseCase = async (
  store: CandidateDocumentStore,
  id: number
) => {
  await store.remove(id);
};

export { removeCandidateDocumentUseCase };
