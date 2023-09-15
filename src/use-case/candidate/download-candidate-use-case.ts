import { CandidateStore } from "src/domain/store/candidate-store";

const downloadCandidateUseCase = async (store: CandidateStore) => {
  await store.downloadCandidate();
};

export { downloadCandidateUseCase };
