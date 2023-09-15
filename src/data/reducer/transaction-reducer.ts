import type { AnyAction } from "redux";
import { ProductCategoryStore } from "src/domain/store/product-category-store";
import { MapStateReducers } from "src/helpers/map-state-reducers";
import { ProductCategoryActionType } from "../action-type/product-categoty-action-type";
import { TransactionStore } from "src/domain/store/transaction-store";
import { TransactionActionType } from "../action-type/transaction-action-type";

type TransactionStoreState = Omit<
  TransactionStore,
  "get" | "submit" | "remove"
>;

const INITIAL_STATE: TransactionStoreState = {
  transactions: undefined,
  transaction: undefined,
  validation: undefined,
  status: undefined,
};

const transactionReducer = (
  state: TransactionStoreState = INITIAL_STATE,
  action: AnyAction
) => {
  switch (action.type) {
    case TransactionActionType.GET:
      return {
        ...state,
        transactions: action.payload ?? [],
        status: action?.payload?.status,
        validation: action?.payload?.validation ?? [],
      };
    case TransactionActionType.SUBMIT:
      const item = {
        id: action.payload.id,
        name: action.payload.name,
        productCategoryId: action.payload.productCategoryId,
        productCategoryName: action.payload.productCategoryName,
        amount: action.payload.amount,
        total: action.payload.total,
      };
      return {
        ...state,
      };
    // if (!item) {
    //   return {
    //     ...state,
    //   };
    // }
    // return {
    //   ...state,
    //   transactions: MapStateReducers.addItemStateList(
    //     state?.transactions,
    //     item
    //   ),
    // };
    case ProductCategoryActionType.REMOVE:
      return {
        ...state,
        transactions: MapStateReducers.removeItemStateList(
          state?.transactions,
          action.payload
        ),
      };
    default:
      return state;
  }
};

export { transactionReducer };
export type { TransactionStoreState };
