import {
    DapilEntity,
    RequestDapilEntity
  } from "../entity/dapil-entity";
  import { ResponseEntity } from "../entity/response-entity";
  import { BaseStore } from "./base-store";
  
  interface DapilStore extends BaseStore {
    dapils: [DapilEntity];
    dapilById: DapilEntity; 
  
    // Actions
    getDapils(
      name?: string,
      province?: string,
      type?: string,
      period?: string,
    ): Promise<ResponseEntity<[DapilEntity]>>;

    getDapilById(
      id: string
    ): Promise<ResponseEntity<DapilEntity>>;
    
    submit(
      isEdit: boolean,
      request: RequestDapilEntity
    ): Promise<ResponseEntity<DapilEntity>>;
  
    remove(
      id: number
    ): Promise<ResponseEntity<DapilEntity>>;
  }
  
  export type { DapilStore };
  