import { ChangePasswordEntity } from "../entity/change-password-entity";
import { ResponseEntity } from "../entity/response-entity";
import { BaseStore } from "./base-store";

interface ChangePasswordStore extends BaseStore {
  changePasswordObject: ChangePasswordEntity
  
  // Actions
  changePassword(changePasswordEntity: ChangePasswordEntity): Promise<ResponseEntity<ChangePasswordEntity>>;
}

export type { ChangePasswordStore };
