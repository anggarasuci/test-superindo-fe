import { useCallback, useEffect, useState } from "react";
import { productCategoryStoreImplementation } from "src/data/store-implementation/product-category-store-implementation";
import { getProductCategoryUseCase } from "src/use-case/product-category/get-product-category-use-case";
import { removeProductCategoryUseCase } from "src/use-case/product-category/remove-product-category-use-case";
import { submitProductCategoryUseCase } from "src/use-case/product-category/submit-product-category-use-case";

const ProductCategoryViewModel = () => {
  const productCategoryStore = productCategoryStoreImplementation();
  const [showAlert, setShowAlert] = useState<boolean>(false);
  const [keyword, setKeyword] = useState<string>("");

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {}, [productCategoryStore]);

  const getData = useCallback(async () => {
    await getProductCategoryUseCase(productCategoryStore);
    setShowAlert(true);
  }, [productCategoryStore]);

  const onSubmitClicked = useCallback(
    async (id: string | null, name: string, isActive: boolean) => {
      await submitProductCategoryUseCase(
        productCategoryStore,
        name,
        isActive,
        id
      );
      setShowAlert(true);
    },
    [productCategoryStore]
  );

  const onRemoveClicked = useCallback(
    async (id: string) => {
      await removeProductCategoryUseCase(productCategoryStore, id);
      setShowAlert(true);
    },
    [productCategoryStore]
  );

  const onCloseAlert = useCallback(() => {
    setShowAlert(false);
  }, []);

  return {
    isShowAlert: showAlert,
    productCategories: productCategoryStore.productCategories,
    onSubmitClicked,
    onRemoveClicked,
    onCloseAlert,
  };
};

export default ProductCategoryViewModel;
