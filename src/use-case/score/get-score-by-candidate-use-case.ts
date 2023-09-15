import { ScoreStore } from "src/domain/store/candidate-score-store";

const getScoreByCandidateUseCase = async (
  store: ScoreStore,
  candidateId: number
) => {
  await store.getScoreByCandidate(candidateId);
};

export { getScoreByCandidateUseCase };
