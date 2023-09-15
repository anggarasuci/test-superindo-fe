import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { InitAction } from "../action/init-action";
import { InitStoreState } from "../reducer/init-reducer";
import type { AppRootState } from "./app-store-implementation";
import { InitStore } from "src/domain/store/init-store";


const initSelector = (state: AppRootState) => state.init;

const initStoreImplementation = (): InitStore => {
  const { menus, periods, types, user, period_id, type_id, validation, status } = useSelector<
    AppRootState,
    InitStoreState
  >(initSelector);

  const dispatch = useDispatch();

  //overidde from store
  const initPeriods = useCallback((name?: string) => InitAction.initPeriodsAction(name)(dispatch), [dispatch]);
  const initTypes = useCallback((name?: string) => InitAction.initTypesAction(name)(dispatch), [dispatch]);
  const initUser = useCallback((name?: string) => InitAction.initUserAction(name)(dispatch), [dispatch]);
  const setPeriodId = useCallback((id: number) => InitAction.setPeriodId(id)(dispatch), [dispatch]);
  const setTypeId = useCallback((id: number) => InitAction.setTypeId(id)(dispatch), [dispatch]);

  return {
      menus,
      periods,
      types,
      user,
      period_id,
      type_id,
      validation,
      status,
      initPeriods,
      initTypes,
      initUser,
      setPeriodId,
      setTypeId
  };
};

export { initStoreImplementation, initSelector };
