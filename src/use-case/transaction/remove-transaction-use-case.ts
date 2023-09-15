import { TransactionStore } from "src/domain/store/transaction-store";

const removeTransactionUseCase = async (
  store: TransactionStore,
  id: string
) => {
  await store.remove(id);
};

export { removeTransactionUseCase };
