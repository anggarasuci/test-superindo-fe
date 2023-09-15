import { ResponseEntity } from "../entity/response-entity";
import { ScoreTypeEntity, RequestScoreTypeEntity } from "../entity/score-type-entity";
import { BaseStore } from "./base-store";

interface ScoreTypeStore extends BaseStore {
    scoreTypes: [ScoreTypeEntity];
    scoreType: ScoreTypeEntity;

    getScoreTypes(name?: string): Promise<ResponseEntity<[ScoreTypeEntity]>>;

    getScoreTypeById(id: number): Promise<ResponseEntity<ScoreTypeEntity>>;

    submit(isEdit: boolean, request: RequestScoreTypeEntity): 
        Promise<ResponseEntity<ScoreTypeEntity>>;

    remove(
        id: number
    ): Promise<ResponseEntity<ScoreTypeEntity>>;
}

export type { ScoreTypeStore };