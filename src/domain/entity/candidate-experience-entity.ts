import { CandidateEntity } from "./candidate-entity";

export interface ExperienceEntity {
  id: number;
  company: string;
  position: string;
  year: number;
  candidate: CandidateEntity;
}

export interface RequestExperienceEntity {
  id: number;
  candidate: number;
  company: string;
  position: string;
  year: number;
}
