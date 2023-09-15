import { ScoreTypeService } from "src/data/service/score-type-service";
import { mapResponse } from "src/helpers/map-response";
import { ScoreTypeEntity, RequestScoreTypeEntity } from "../entity/score-type-entity";
import { ResponseEntity } from "../entity/response-entity";

const getScoreTypes = async (name?: string): Promise<ResponseEntity<[ScoreTypeEntity]>> => {
  return mapResponse(await ScoreTypeService.getScoreTypes(name));
};

const getScoreTypeById = async (
  id: number
): Promise<ResponseEntity<ScoreTypeEntity>> => {
  return mapResponse(
    await ScoreTypeService.getScoreTypeById(id)
  );
};

const submit = async (
  isEdit: boolean,
  request: RequestScoreTypeEntity,
): Promise<ResponseEntity<ScoreTypeEntity>> => {
  return mapResponse(await ScoreTypeService.submit(isEdit, request));
};

const remove = async (
  id: number
): Promise<ResponseEntity<ScoreTypeEntity>> => {
  return mapResponse(await ScoreTypeService.remove(id));
};

export const ScoreTypeRepository = {
  getScoreTypes,
  getScoreTypeById,
  submit,
  remove
};
