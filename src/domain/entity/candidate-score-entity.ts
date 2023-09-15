import { BaseEntity } from "./base-entity";
import { CandidateEntity } from "./candidate-entity";
import { DapilEntity } from "./dapil-entity";
import { ScoreTypeEntity } from "./score-type-entity";

export interface ScoreEntity {
  id: number;
  period: BaseEntity;
  type: BaseEntity;
  dapil: DapilEntity;
  candidate: CandidateEntity;
  score_type: ScoreTypeEntity;
  score: number;
  notes: string;
}

export interface RequestScoreEntity {
  id: number;
  period: number;
  type: number;
  dapil: number;
  candidate: number;
  score_type: number;
  score: number;
  notes: string;
}

export interface BaseScoreEntity {
  masterId: number;
  id: number;
  score?: string;
  scoreNumber?: number;
  notes?: string;
}
