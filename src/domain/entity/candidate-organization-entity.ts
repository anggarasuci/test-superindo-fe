import { CandidateEntity } from "./candidate-entity";

export interface OrganizationEntity {
  id: number;
  organization: string;
  position: string;
  year: number;
  candidate: CandidateEntity;
}

export interface RequestOrganizationEntity {
  id: number;
  candidate: number;
  organization: string;
  position: string;
  year: number;
}
