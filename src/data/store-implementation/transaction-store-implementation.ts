import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { AppRootState } from "./app-store-implementation";
import { TransactionStore } from "src/domain/store/transaction-store";
import { TransactionStoreState } from "../reducer/transaction-reducer";
import { TransactionAction } from "../action/transaction-action";
import { TransactionEntity } from "src/domain/entity/transaction-entity";

const transactionSelector = (state: AppRootState) => state.transaction;

const transactionStoreImplementation = (): TransactionStore => {
  const { transactions, validation, transaction, status } = useSelector<
    AppRootState,
    TransactionStoreState
  >(transactionSelector);
  const dispatch = useDispatch();

  //overidde from store
  const get = useCallback(
    () => TransactionAction.getAction()(dispatch),
    [dispatch]
  );

  const submit = useCallback(
    (request: TransactionEntity) =>
      TransactionAction.submitAction(request)(dispatch),
    [dispatch]
  );

  const remove = useCallback(
    (id: string) => TransactionAction.removeAction(id)(dispatch),
    [dispatch]
  );

  return {
    transactions,
    transaction,
    validation,
    status,
    get,
    submit,
    remove,
  };
};

export { transactionStoreImplementation, transactionSelector };
