import { BaseEntity } from "./base-entity";

export interface ScoreTypeEntity extends BaseEntity {
    max_point: number;
    active: boolean | true;
}

export interface RequestScoreTypeEntity extends BaseEntity {
    max_point: number;
    active: boolean | true;
}
