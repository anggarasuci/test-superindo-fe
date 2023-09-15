import { BaseEntity } from "./base-entity";
import { CandidateEntity } from "./candidate-entity";
import { DapilEntity } from "./dapil-entity";
import { InstitutionEntity } from "./institution-entity";
import { GroupPeriodSurveyEntity } from "./mapping-group-survey-entity";
import { PartyEntity } from "./party-entity";

export interface ResultSurveyEntity {
  type: string;
  period: string;
  province: BaseEntity;
  dapil: DapilEntity;
  party: PartyEntity;
  candidate: CandidateEntity;
  institution: InstitutionEntity;
  group_period_survey: GroupPeriodSurveyEntity;
  result: string;
  total_kursi: number;
  total_pengguna_hak_pilih: number;
  total_sah: number;
  period_survey: string;
  position: string;
}

export interface RequestResultSurveyEntity {
  type?: string;
  period?: string;
  province?: string;
  dapil?: string;
  party?: string;
  candidate?: string;
  institution?: string;
  displayBy: "party" | "candidate";
  group_period_survey?: string;
}

export interface ResultSurveySeatEntity {
  type: string;
  period: string;
  provinces: ResultSurveySeatProvinceEntity[];
}

export interface ResultSurveySeatProvinceEntity {
  province: BaseEntity;
  dapils: ResultSurveySeatGroupPeriodnEntity[];
}

export interface ResultSurveySeatGroupPeriodnEntity {
  dapil: DapilEntity;
  group_periods: ResultSurveySeatPeriodEntity[];
}

export interface ResultSurveySeatInstitutionEntity {
  dapil: DapilEntity;
  institutions: ResultSurveySeatPeriodEntity[];
}

export interface ResultSurveySeatPeriodEntity {
  group_period: GroupPeriodSurveyEntity;
  periods_survey: ResultSurveySeatDataEntity[];
}

export interface ResultSurveySeatDataEntity {
  parentId: string;
  period_survey: string;
  institution: InstitutionEntity;
  parties: PartyEntity[];
  candidates?: CandidateEntity[];

  result?: ValueWithPartyId[];
  total_kursi?: ValueWithPartyId[];
  total_pengguna_hak_pilih?: ValueWithPartyId[];
  total_sah?: ValueWithPartyId[];
  position?: ValueWithPartyId[];

  period?: string[];
  type?: string[];
}

export interface ValueWithPartyId {
  value: any;
  partyId: any;
}

export interface SortSeat {
  groupPeriodId: string;
  institutionId: string;
  key: string;
  orderBy: "desc" | "asc";
}

export interface ResultSurveyByPeriodEntity {
  party?: PartyEntity;
  candidate?: CandidateEntity;
  data: ResultSurveyByPeriodDataEntity[];
  lineDataSeries: LineDataSeriesEntity[];
}

export interface LineDataSeriesEntity {
  x: any;
  y: any;
  color: string;
  secondary_color: string;
}

export interface DataSetSurveyEntity {
  label: string;
  backgroundColor: string[];
  data: string[];
  borderColor: string[];
  borderWidth: number;
  hoverBackgroundColor: string[];
}

export interface ResultSurveyByPeriodDataEntity {
  position: string;
  institution: InstitutionEntity;
  period_survery: string;
  result: string;
  total_kursi: number;
  total_pengguna_hak_pilih: number;
  total_sah: number;
}

export interface ResultSummaryNationalEntity {
  group_period: GroupPeriodSurveyEntity;
  parties: PartyEntity[];
  total_kursi?: number[];
  // data: ResultSummaryNationalDataEntity[];
}

export interface ResultSummaryNationalDataEntity {
  parties: PartyEntity[];
  total_kursi?: number[];
}
