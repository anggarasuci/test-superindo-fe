import { PartyEntity } from "./party-entity";
import { ResultDapilEntity } from "./result-dapil-entity";
import { ResultRegencyEntity } from "./result-regency-entity";

export interface CandidateEntity {
  id: number;
  name: string;
  gender: string;
  photo: string;
  party: PartyEntity;
  active: boolean;
  birthplace: string;
  birthdate: string;
  notes: string;
}

export interface RequestCandidateEntity {
  id: number;
  name: string;
  gender: string;
  party: number;
  active: boolean;
  notes: string;
}

export interface CandidateResultDapilXRegencyEntity {
  resultDapil: ResultDapilEntity;
  resultRegencies: ResultRegencyEntity[];
}
