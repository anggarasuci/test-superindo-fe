import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RequestDapilEntity } from "src/domain/entity/dapil-entity";
import { DapilStore } from "src/domain/store/dapil-store";
import { DapilAction } from "../action/dapil-action";
import { DapilStoreState } from "../reducer/dapil-reducer";
import type { AppRootState } from "./app-store-implementation";

const dapilSelector = (state: AppRootState) => state.dapil;

const dapilStoreImplementation = (): DapilStore => {
  const { dapils, validation, dapilById, status } = useSelector<
    AppRootState,
    DapilStoreState
  >(dapilSelector);
  const dispatch = useDispatch();

  //overidde from store
  const getDapils = useCallback(
    (name?: string, province?: string, type?: string, period?: string) =>
      DapilAction.getDapilAction(name, province, type, period)(dispatch),
    [dispatch]
  );

  const getDapilById = useCallback(
    (id: string) => DapilAction.getDapilByIdAction(id)(dispatch),
    [dispatch]
  );

  const submit = useCallback(
    (isEdit: boolean, request: RequestDapilEntity) =>
      DapilAction.submitAction(isEdit, request)(dispatch),
    [dispatch]
  );

  const remove = useCallback(
    (id: number) => DapilAction.removeAction(id)(dispatch),
    [dispatch]
  );

  return {
    dapils,
    dapilById,
    validation,
    status,
    getDapils,
    getDapilById,
    submit,
    remove,
  };
};

export { dapilStoreImplementation, dapilSelector };
