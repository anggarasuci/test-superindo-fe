import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { AppRootState } from "./app-store-implementation";
import { ProductCategoryStore } from "src/domain/store/product-category-store";
import { ProductCategoryStoreState } from "../reducer/product-category-reducer";
import { ProductCategoryAction } from "../action/product-category-action";
import { ProductCategoryEntity } from "src/domain/entity/product-category-entity";

const productCategorySelector = (state: AppRootState) => state.productCategory;

const productCategoryStoreImplementation = (): ProductCategoryStore => {
  const { productCategories, validation, productCategory, status } =
    useSelector<AppRootState, ProductCategoryStoreState>(
      productCategorySelector
    );
  const dispatch = useDispatch();

  //overidde from store
  const get = useCallback(
    () => ProductCategoryAction.getAction()(dispatch),
    [dispatch]
  );

  const submit = useCallback(
    (request: ProductCategoryEntity) =>
      ProductCategoryAction.submitAction(request)(dispatch),
    [dispatch]
  );

  const remove = useCallback(
    (id: string) => ProductCategoryAction.removeAction(id)(dispatch),
    [dispatch]
  );

  return {
    productCategories,
    productCategory,
    validation,
    status,
    get,
    submit,
    remove,
  };
};

export { productCategoryStoreImplementation, productCategorySelector };
