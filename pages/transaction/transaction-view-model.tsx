import { useCallback, useEffect, useState } from "react";
import { productCategoryStoreImplementation } from "src/data/store-implementation/product-category-store-implementation";
import { transactionStoreImplementation } from "src/data/store-implementation/transaction-store-implementation";
import { getProductCategoryUseCase } from "src/use-case/product-category/get-product-category-use-case";
import { getTransactionUseCase } from "src/use-case/transaction/get-transaction-use-case";
import { removeTransactionUseCase } from "src/use-case/transaction/remove-transaction-use-case";
import { submitTransactionUseCase } from "src/use-case/transaction/submit-transaction-use-case";

const TransactionViewModel = () => {
  const transactionStore = transactionStoreImplementation();
  const productCategoryStore = productCategoryStoreImplementation();
  const [showAlert, setShowAlert] = useState<boolean>(false);
  const [keyword, setKeyword] = useState<string>("");

  useEffect(() => {
    getData();
    getProductCategoryData();
  }, []);

  useEffect(() => {}, [transactionStore]);

  const getData = useCallback(async () => {
    await getTransactionUseCase(transactionStore);
    setShowAlert(true);
  }, [transactionStore]);

  const getProductCategoryData = useCallback(async () => {
    await getProductCategoryUseCase(productCategoryStore);
  }, [productCategoryStore]);

  const onSubmitClicked = useCallback(
    async (
      id: string | null,
      name: string,
      productCategoryId: string,
      amount: number,
      total: number
    ) => {
      await submitTransactionUseCase(
        transactionStore,
        id,
        name,
        productCategoryId,
        amount,
        total
      );
      window.location.reload();
      setShowAlert(true);
    },
    [transactionStore]
  );

  const onRemoveClicked = useCallback(
    async (id: string) => {
      await removeTransactionUseCase(transactionStore, id);
      window.location.reload();
      setShowAlert(true);
    },
    [transactionStore]
  );

  const onCloseAlert = useCallback(() => {
    setShowAlert(false);
  }, []);

  return {
    isShowAlert: showAlert,
    transactions: transactionStore.transactions,
    onSubmitClicked,
    onRemoveClicked,
    onCloseAlert,
  };
};

export default TransactionViewModel;
