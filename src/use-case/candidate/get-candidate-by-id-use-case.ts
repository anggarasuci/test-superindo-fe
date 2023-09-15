import { CandidateStore } from "src/domain/store/candidate-store";

const getCandidateByIdUseCase = async (
  store: CandidateStore,
  id: string | ""
) => {
  await store.getCandidateById(id);
};

export { getCandidateByIdUseCase };
