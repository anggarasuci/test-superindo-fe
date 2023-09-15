import { GroupPeriodSurveyEntity } from "./mapping-group-survey-entity";
import { PartyEntity } from "./party-entity";

export interface ResultNationalEntity {
  party: PartyEntity;
  group_period_survey: GroupPeriodSurveyEntity;
  total_kursi: number;
}

export interface RequestResultNationalEntity {
  party?: string | "";
  group_period_survey?: string | "";
  limit?: number;
}
