import { MenuEntity } from "../entity/menu-entity";
import { PeriodEntity } from "../entity/period-entity";
import { TypeEntity } from "../entity/type-entity";
import { UserEntity } from "../entity/user-entity";
import { ResponseEntity } from "../entity/response-entity";
import { BaseStore } from "./base-store";

interface InitStore extends BaseStore {
    menus: [MenuEntity];
    periods: [PeriodEntity];
    types: [TypeEntity];
    user: UserEntity;
    period_id: number;
    type_id: number;
    initPeriods(
        name?:string
    ): Promise<ResponseEntity<[PeriodEntity]>>;
    initTypes(
        name?:string
    ): Promise<ResponseEntity<[TypeEntity]>>;
    initUser(
        name?:string
    ): Promise<ResponseEntity<UserEntity>>;
    setPeriodId(
        id: number
    ): Promise<ResponseEntity<number>>;
    setTypeId(
        id: number
    ): Promise<ResponseEntity<number>>;
}

export type { InitStore };