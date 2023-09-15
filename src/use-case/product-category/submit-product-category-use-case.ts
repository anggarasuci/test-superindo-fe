import { ProductCategoryEntity } from "src/domain/entity/product-category-entity";
import { ProductCategoryStore } from "src/domain/store/product-category-store";

const submitProductCategoryUseCase = async (
  store: ProductCategoryStore,
  name: string,
  isActive: boolean,
  id: string = null
) => {
  await store.submit(createParams(name, isActive, id));
};

const createParams = (
  name: string,
  isActive: boolean,
  id: string
): ProductCategoryEntity => {
  let result: ProductCategoryEntity = {
    id: id,
    name: name,
    isActive: isActive,
  };
  console.log(">>>>>>> ccc", result);
  return result;
};

export { submitProductCategoryUseCase };
