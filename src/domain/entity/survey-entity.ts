import { DapilEntity } from "./dapil-entity";

export interface PdfSurveyEntity {
  id?: string;
  period_survey: string;
  file: any;
  dapil?: DapilEntity;
  dapilId: number;
}

export interface GroupSurveyEntity {
  id: string;
  dapil: any;
  period_survey: any;
  institution: any;
  group_period_survey: any;
}
