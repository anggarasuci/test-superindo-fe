import { BaseEntity } from "./base-entity";
import { CandidateEntity } from "./candidate-entity";
import { ScoreDapilEntity } from "./result-score-entity";

export interface ResultCandidateScoreEntity {
  period: BaseEntity;
  type: BaseEntity;
  dapil: ScoreDapilEntity;
  candidate: CandidateEntity;
  total_score: number;
  total_suara: number;
  total_survey: number;
  avg_score_dapil: number;
  count_document: number;
  sequence: number;
  id: number;
}
