import { ResponseEntity } from "../entity/response-entity";
import { BaseStore } from "./base-store";
import { TransactionEntity } from "../entity/transaction-entity";

interface TransactionStore extends BaseStore {
  transactions: [TransactionEntity];
  transaction: TransactionEntity;

  get(): Promise<ResponseEntity<[TransactionEntity]>>;

  submit(
    request: TransactionEntity
  ): Promise<ResponseEntity<TransactionEntity>>;

  remove(id: string): Promise<ResponseEntity<TransactionEntity>>;
}

export type { TransactionStore };
