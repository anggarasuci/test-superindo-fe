import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RequestAdditionalField } from "src/domain/entity/base-dapil-entity";
import { BaseDapilStore } from "src/domain/store/base-dapil-store";
import { BaseDapilAction } from "../action/base-dapil-action";
import { BaseDapilStoreState } from "../reducer/base-dapil-reducer";
import type { AppRootState } from "./app-store-implementation";

const baseDapilSelector = (state: AppRootState) => state.basedapil;

const baseDapilStoreImplementation = (): BaseDapilStore => {
  const { basedapils, validation, basedapilById, status } = useSelector<
    AppRootState,
    BaseDapilStoreState
  >(baseDapilSelector);
  const dispatch = useDispatch();

  //overidde from store
  const getBaseDapils = useCallback(
    (name?: string) => BaseDapilAction.getBaseDapilAction(name)(dispatch),
    [dispatch]
  );

  const updateAdditionalField = useCallback(
    (request: RequestAdditionalField) =>
      BaseDapilAction.updateAdditionalFieldAction(request)(dispatch),
    [dispatch]
  );

  return {
    basedapils,
    basedapilById,
    validation,
    status,
    getBaseDapils,
    updateAdditionalField,
  };
};

export { baseDapilStoreImplementation, baseDapilSelector };
