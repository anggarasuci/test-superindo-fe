import type { AnyAction } from "redux";
import { ProductCategoryStore } from "src/domain/store/product-category-store";
import { MapStateReducers } from "src/helpers/map-state-reducers";
import { ProductCategoryActionType } from "../action-type/product-categoty-action-type";

type ProductCategoryStoreState = Omit<
  ProductCategoryStore,
  "get" | "submit" | "remove"
>;

const INITIAL_STATE: ProductCategoryStoreState = {
  productCategories: undefined,
  productCategory: undefined,
  validation: undefined,
  status: undefined,
};

const productCategoryReducer = (
  state: ProductCategoryStoreState = INITIAL_STATE,
  action: AnyAction
) => {
  switch (action.type) {
    case ProductCategoryActionType.GET:
      return {
        ...state,
        productCategories: action.payload ?? [],
        status: action?.payload?.status,
        validation: action?.payload?.validation ?? [],
      };
    case ProductCategoryActionType.SUBMIT:
      const item = {
        id: action.payload.id,
        name: action.payload.name,
        isActive: action.payload.isActive,
      };
      if (!item) {
        return {
          ...state,
        };
      }
      return {
        ...state,
        productCategories: MapStateReducers.addItemStateList(
          state?.productCategories,
          item
        ),
      };
    case ProductCategoryActionType.REMOVE:
      return {
        ...state,
        productCategories: MapStateReducers.removeItemStateList(
          state?.productCategories,
          action.payload
        ),
      };
    default:
      return state;
  }
};

export { productCategoryReducer };
export type { ProductCategoryStoreState };
