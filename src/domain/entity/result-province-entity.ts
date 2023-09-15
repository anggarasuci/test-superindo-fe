import { CandidateEntity } from "./candidate-entity";
import { ProvinceEntity } from "./location-entity";
import { PartyEntity } from "./party-entity";

export interface ResultProvinceEntity {
    period: string;
    type: string;
    province: ProvinceEntity;
    party: PartyEntity;
    candidate: CandidateEntity;
    total_suara: number;
}