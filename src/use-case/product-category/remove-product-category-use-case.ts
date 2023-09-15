import { ProductCategoryStore } from "src/domain/store/product-category-store";

const removeProductCategoryUseCase = async (
  store: ProductCategoryStore,
  id: string
) => {
  await store.remove(id);
};

export { removeProductCategoryUseCase };
