import { CandidateStore } from "src/domain/store/candidate-store";

const getCandidateUseCase = async (
  store: CandidateStore,
  name?: string | ""
) => {
  await store.getCandidates(name);
};

export { getCandidateUseCase };
