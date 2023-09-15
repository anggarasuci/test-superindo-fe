import { CandidateStore } from "src/domain/store/candidate-store";

const removeCandidateUseCase = async (
  store: CandidateStore,
  id: number
) => {
  await store.remove(id);
};

export { removeCandidateUseCase };
