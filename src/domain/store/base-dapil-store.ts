import {
  BaseDapilEntity,
  RequestAdditionalField,
} from "../entity/base-dapil-entity";
import { ResponseEntity } from "../entity/response-entity";
import { BaseStore } from "./base-store";

interface BaseDapilStore extends BaseStore {
  basedapils: [BaseDapilEntity];
  basedapilById: BaseDapilEntity;
  getBaseDapils(name?: string): Promise<ResponseEntity<[BaseDapilEntity]>>;
  updateAdditionalField(
    request: RequestAdditionalField
  ): Promise<ResponseEntity<any>>;
}

export type { BaseDapilStore };
