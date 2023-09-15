import {
    PartyEntity,
    RequestPartyEntity
  } from "../entity/party-entity";
  import { ResponseEntity } from "../entity/response-entity";
  import { BaseStore } from "./base-store";
  
  interface PartyStore extends BaseStore {
    parties: [PartyEntity];
    partyById: PartyEntity; 
  
    // Actions
    getParties(
      name?: string
    ): Promise<ResponseEntity<[PartyEntity]>>;
    
    submit(
      isEdit: boolean,
      request: RequestPartyEntity
    ): Promise<ResponseEntity<PartyEntity>>;
  
    remove(
      id: number
    ): Promise<ResponseEntity<PartyEntity>>;
  }
  
  export type { PartyStore };
  