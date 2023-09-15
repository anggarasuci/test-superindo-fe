import { ProductCategoryService } from "src/data/service/product-category-service";
import { mapResponse, mapResponseList } from "src/helpers/map-response";
import { ResponseEntity } from "../entity/response-entity";
import { ProductCategoryEntity } from "../entity/product-category-entity";

const get = async (): Promise<ResponseEntity<[ProductCategoryEntity]>> => {
  return await ProductCategoryService.get();
};

const getById = async (
  id: string
): Promise<ResponseEntity<ProductCategoryEntity>> => {
  return mapResponse(await ProductCategoryService.getById(id));
};

const submit = async (
  request: ProductCategoryEntity
): Promise<ResponseEntity<ProductCategoryEntity>> => {
  return mapResponse(await ProductCategoryService.submit(request));
};

const remove = async (
  id: string
): Promise<ResponseEntity<ProductCategoryEntity>> => {
  return mapResponse(await ProductCategoryService.remove(id));
};

export const ProductCategoryRepository = {
  get,
  getById,
  submit,
  remove,
};
