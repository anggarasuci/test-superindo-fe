import { BaseEntity } from "./base-entity";

export interface MappingGroupSurveyEntity {
  id: number;
  group_period_survey: number;
  dapil: number;
  period_survey: string;
  institution: number;
}

export interface RequestMappingGroupSurveyEntity {
  id: number;
  group_period_survey: number;
  dapil: number;
  period_survey: string;
  institution: number;
}

export interface GroupPeriodSurveyEntity extends BaseEntity {
  seq: number;
}
