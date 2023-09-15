import { ProductCategoryStore } from "src/domain/store/product-category-store";

const getProductCategoryUseCase = async (store: ProductCategoryStore) => {
  await store.get();
};

export { getProductCategoryUseCase };
