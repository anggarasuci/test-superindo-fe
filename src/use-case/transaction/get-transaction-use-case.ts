import { TransactionStore } from "src/domain/store/transaction-store";

const getTransactionUseCase = async (store: TransactionStore) => {
  await store.get();
};

export { getTransactionUseCase };
