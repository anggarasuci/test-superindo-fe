import { CandidateEntity } from "./candidate-entity";
import { DapilEntity } from "./dapil-entity";
import { ProvinceEntity } from "./location-entity";
import { PartyEntity } from "./party-entity";

export interface ResultDapilEntity {
    period?: string;
    type?: string;
    province?: ProvinceEntity;
    party?: PartyEntity;
    candidate?: CandidateEntity;
    dapil?: DapilEntity;
    total_suara?: number;
    flag_win?: boolean | null;
    sequence?: number;
}