import { ScoreTypeStore } from "src/domain/store/score-type-store";

const getScoreTypeByIdUseCase = async (
  store: ScoreTypeStore,
  id: number
) => {
  await store.getScoreTypeById(id);
};

export { getScoreTypeByIdUseCase };
