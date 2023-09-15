import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TypeStore } from "src/domain/store/type-store";
import { TypeAction } from "../action/type-action";
import { TypeStoreState } from "../reducer/type-reducer";
import type { AppRootState } from "./app-store-implementation";

const typeSelector = (state: AppRootState) => state.type;

const typeStoreImplementation = (): TypeStore => {
  const {
    types,
    validation,
    typeById,
    status,
  } = useSelector<AppRootState, TypeStoreState>(typeSelector);
  const dispatch = useDispatch();

  //overidde from store
  const getTypes = useCallback(
    (name?: string) =>
      TypeAction.getTypeAction(name)(dispatch),
    [dispatch]
  );

  return {
    types,
    typeById,
    validation,
    status,
    getTypes
  };
};

export { typeStoreImplementation, typeSelector };
