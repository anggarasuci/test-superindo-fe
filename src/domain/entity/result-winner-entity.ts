import { BaseEntity } from "./base-entity";
import { CandidateEntity } from "./candidate-entity";
import { DapilEntity } from "./dapil-entity";
import { PartyEntity } from "./party-entity";

export interface ResultWinnerEntity {
    id?: string;
    period?: string;
    type?: string;
    sequence?: number;
    dapil?: DapilEntity;
    candidate?: CandidateEntity;
    party?: PartyEntity;
    province?: BaseEntity;
    total_suara?: number;
    total_suara_saint_lague?: number;
    flag_win?: boolean;
}