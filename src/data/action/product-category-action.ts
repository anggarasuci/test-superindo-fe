import { ProductCategoryRepository } from "src/domain/repository/product-category-repository";
import { ProductCategoryActionType } from "../action-type/product-categoty-action-type";
import { ProductCategoryEntity } from "src/domain/entity/product-category-entity";

const getAction = () => async (dispatch: any) => {
  const response = await ProductCategoryRepository.get();
  dispatch({
    type: ProductCategoryActionType.GET,
    payload: response,
  });
  return response;
};

const getByIdAction = (id: string) => async (dispatch: any) => {
  const response = await ProductCategoryRepository.getById(id);
  dispatch({
    type: ProductCategoryActionType.GET_BY_ID,
    payload: response,
  });
  return response;
};

const submitAction =
  (request: ProductCategoryEntity) => async (dispatch: any) => {
    const response = await ProductCategoryRepository.submit(request);
    dispatch({
      type: ProductCategoryActionType.SUBMIT,
      payload: response,
    });
    return response;
  };

const removeAction = (id: string) => async (dispatch: any) => {
  const response = await ProductCategoryRepository.remove(id);
  dispatch({
    type: ProductCategoryActionType.REMOVE,
    payload: id,
  });
  return response;
};

export const ProductCategoryAction = {
  getAction,
  getByIdAction,
  submitAction,
  removeAction,
};
