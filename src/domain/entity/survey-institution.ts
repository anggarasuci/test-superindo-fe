import { BaseEntity } from "./base-entity";

export interface SurveyInstitutionEntity extends BaseEntity {}

export interface RequestSurveyInstitutionEntity {
  id: number;
  name: string;
}
