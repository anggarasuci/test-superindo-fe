import { PeriodEntity } from "../entity/period-entity";
import { ResponseEntity } from "../entity/response-entity";
import { BaseStore } from "./base-store";

interface PeriodStore extends BaseStore {
    periods: [PeriodEntity];
    periodById: PeriodEntity;
    getPeriods(
        name?:string
    ): Promise<ResponseEntity<[PeriodEntity]>>;
}

export type { PeriodStore };