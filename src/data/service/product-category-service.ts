import getConfig from "next/config";
import { fetchWrapper } from "../../helpers/fetch-wrapper";
import { Endpoint } from "src/helpers/constant/endpoint";
import { ProductCategoryActionType } from "../action-type/product-categoty-action-type";
import { ProductCategoryEntity } from "src/domain/entity/product-category-entity";

const { publicRuntimeConfig } = getConfig();
const baseUrl = `${publicRuntimeConfig.apiUrl}${Endpoint.productCategory}`;

const get = async () => {
  return fetchWrapper.get(ProductCategoryActionType.GET, `${baseUrl}`);
};

const getById = async (id: String) => {
  return fetchWrapper.get(
    ProductCategoryActionType.GET_BY_ID,
    `${baseUrl}${id}/`
  );
};

const submit = async (request: ProductCategoryEntity) => {
  console.log(">>>>>>> bcbcb", request);
  return fetchWrapper.post(
    ProductCategoryActionType.SUBMIT,
    `${baseUrl}`,
    request
  );
};

const remove = async (id: string) => {
  return fetchWrapper.delete(
    ProductCategoryActionType.REMOVE,
    `${baseUrl}${id}/`
  );
};

export const ProductCategoryService = {
  get,
  getById,
  submit,
  remove,
};
