import { ScoreTypeEntity, RequestScoreTypeEntity } from "src/domain/entity/score-type-entity";
import { ScoreTypeStore } from "src/domain/store/score-type-store";

const submitScoreTypeUseCase = async (
  store: ScoreTypeStore,
  isEdit: boolean,
  id: number| null,
  name: string | "",
  max_point: number | null,
  active: boolean | true
) => {
  await store.submit(isEdit, createParams(id, name, max_point, active));
};

const createParams = (id: number, name: string, max_point: number, active: boolean): RequestScoreTypeEntity => {
  let result: RequestScoreTypeEntity = {
    id: id ? id.toString() : "",
    name: name,
    max_point: max_point,
    active: active
  };
  return result;
};

export { submitScoreTypeUseCase };
