import { CandidateStore } from "src/domain/store/candidate-store";

const uploadPhotoCandidateUseCase = async (
  store: CandidateStore,
  candidateId: number,
  image: string
) => {
  await store.uploadPhotoCandidate(candidateId, image);
};

export { uploadPhotoCandidateUseCase };
