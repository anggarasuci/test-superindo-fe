import { TransactionEntity } from "src/domain/entity/transaction-entity";
import { TransactionStore } from "src/domain/store/transaction-store";

const submitTransactionUseCase = async (
  store: TransactionStore,
  id: string,
  name: string,
  productCategoryId: string,
  amount: number,
  total: number
) => {
  await store.submit(createParams(id, name, productCategoryId, amount, total));
};

const createParams = (
  id: string,
  name: string,
  productCategoryId: string,
  amount: number,
  total: number
): TransactionEntity => {
  let result: TransactionEntity = {
    id: id,
    name: name,
    productCategoryId: productCategoryId,
    productCategoryName: "",
    amount: amount,
    total: total,
  };
  return result;
};

export { submitTransactionUseCase };
