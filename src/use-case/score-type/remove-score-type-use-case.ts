import { ScoreTypeStore } from "src/domain/store/score-type-store";

const removeScoreTypeUseCase = async (
  store: ScoreTypeStore,
  id: number
) => {
  await store.remove(id);
};

export { removeScoreTypeUseCase };
