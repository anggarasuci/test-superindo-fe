import { ScoreTypeStore } from "src/domain/store/score-type-store";

const getScoreTypesUseCase = async (
  store: ScoreTypeStore,
  name: string
) => {
  await store.getScoreTypes(name);
};

export { getScoreTypesUseCase };
