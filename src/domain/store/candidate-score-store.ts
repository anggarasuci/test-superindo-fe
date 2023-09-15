import {
  RequestScoreEntity,
  ScoreEntity,
} from "../entity/candidate-score-entity";
import { ResponseEntity } from "../entity/response-entity";
import { BaseStore } from "./base-store";

interface ScoreStore extends BaseStore {
  scores: [ScoreEntity];

  // Actions
  getScoreByCandidate(
    candidateId: number
  ): Promise<ResponseEntity<[ScoreEntity]>>;

  submit(
    isEdit: boolean,
    request: RequestScoreEntity
  ): Promise<ResponseEntity<ScoreEntity>>;
}

export type { ScoreStore };
