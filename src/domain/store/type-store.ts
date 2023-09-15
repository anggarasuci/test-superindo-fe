import { TypeEntity } from "../entity/type-entity";
import { ResponseEntity } from "../entity/response-entity";
import { BaseStore } from "./base-store";

interface TypeStore extends BaseStore {
    types: [TypeEntity];
    typeById: TypeEntity;
    getTypes(
        name?:string
    ): Promise<ResponseEntity<[TypeEntity]>>;
}

export type { TypeStore };