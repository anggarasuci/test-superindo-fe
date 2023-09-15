import { ScoreService } from "src/data/service/candidate-score-service";
import { mapResponse } from "src/helpers/map-response";
import {
  RequestScoreEntity,
  ScoreEntity,
} from "../entity/candidate-score-entity";
import { ResponseEntity } from "../entity/response-entity";

const getScoreByCandidate = async (
  candidateId: number
): Promise<ResponseEntity<[ScoreEntity]>> => {
  return mapResponse(await ScoreService.getByCandidate(candidateId));
};

const submit = async (
  isEdit: boolean,
  request: RequestScoreEntity
): Promise<ResponseEntity<ScoreEntity>> => {
  return mapResponse(await ScoreService.submit(isEdit, request));
};

export const ScoreRepository = {
  getScoreByCandidate,
  submit,
};
