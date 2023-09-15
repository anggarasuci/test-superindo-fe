import { CandidateEntity } from "./candidate-entity";
import { RegencyEntity } from "./location-entity";
import { PartyEntity } from "./party-entity";

export interface ResultRegencyEntity {
  period: string;
  type: string;
  regency: RegencyEntity;
  party: PartyEntity;
  candidate_party: PartyEntity;
  candidate: CandidateEntity;
  total_suara: number;
}
