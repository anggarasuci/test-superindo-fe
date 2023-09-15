import { ResponseEntity } from "../entity/response-entity";
import { BaseStore } from "./base-store";
import { ProductCategoryEntity } from "../entity/product-category-entity";

interface ProductCategoryStore extends BaseStore {
  productCategories: [ProductCategoryEntity];
  productCategory: ProductCategoryEntity;

  get(): Promise<ResponseEntity<[ProductCategoryEntity]>>;

  submit(
    request: ProductCategoryEntity
  ): Promise<ResponseEntity<ProductCategoryEntity>>;

  remove(id: string): Promise<ResponseEntity<ProductCategoryEntity>>;
}

export type { ProductCategoryStore };
