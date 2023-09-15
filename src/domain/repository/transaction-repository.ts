import { mapResponse } from "src/helpers/map-response";
import { ResponseEntity } from "../entity/response-entity";
import { TransactionEntity } from "../entity/transaction-entity";
import { TransactionService } from "src/data/service/transaction-service";

const get = async (): Promise<ResponseEntity<[TransactionEntity]>> => {
  return await TransactionService.get();
};

const getById = async (
  id: string
): Promise<ResponseEntity<TransactionEntity>> => {
  return mapResponse(await TransactionRepository.getById(id));
};

const submit = async (
  request: TransactionEntity
): Promise<ResponseEntity<TransactionEntity>> => {
  return mapResponse(await TransactionService.submit(request));
};

const remove = async (
  id: string
): Promise<ResponseEntity<TransactionEntity>> => {
  return mapResponse(await TransactionService.remove(id));
};

export const TransactionRepository = {
  get,
  getById,
  submit,
  remove,
};
