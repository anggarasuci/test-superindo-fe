import { removeCookies } from "cookies-next";
import {
  AnyAction,
  applyMiddleware,
  combineReducers,
  createStore,
} from "redux";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";
import { AuthActionType } from "../action-type/auth-action-type";
import { authReducer } from "../reducer/auth-reducer";
import { productCategoryReducer } from "../reducer/product-category-reducer";
import { transactionReducer } from "../reducer/transaction-reducer";

const rootReducer = combineReducers({
  auth: authReducer,
  productCategory: productCategoryReducer,
  transaction: transactionReducer,
});

const rootActionReducers = (state, action: AnyAction) => {
  if (action.type === AuthActionType.LOGOUT) {
    storage.removeItem("persist:root");
    removeCookies("token");
    return rootReducer(undefined, action);
  }
  return rootReducer(state, action);
};

const persistConfig = {
  key: "root",
  storage: storage,
  whitelist: ["auth", "productCategory", "transaction"],
};
// const persistedReducer = persistReducer(persistConfig, rootReducer);
const persistedReducer = persistReducer(persistConfig, rootActionReducers);

const appStoreImplementation = createStore(
  persistedReducer,
  applyMiddleware(thunk)
);

const appPersistor = persistStore(appStoreImplementation);

type AppRootState = ReturnType<typeof appStoreImplementation.getState>;

export { appStoreImplementation, appPersistor };
export type { AppRootState };
