import { useDispatch, useSelector } from "react-redux";
import { useCallback } from "react";
import getConfig from "next/config";
import { SettingStore } from "src/domain/store/setting-store";
import { SettingStoreState } from "../reducer/setting-reducer";
import type { AppRootState } from "./app-store-implementation";
import { SettingAction } from "../action/setting-action";
import { MapResultEntity } from "src/domain/entity/map-result-entity";

const selector = (state: AppRootState) => state.setting;

const settingStoreImplementation = (): SettingStore => {
  const dispatch = useDispatch();
  const { publicRuntimeConfig } = getConfig();
  const applicationName = `${publicRuntimeConfig.applicationName}`;
  const globalTypeId = 1; // PEMILU CALEG DPR RI
  const globalPeriodId = 2; // 2019
  const defaultChartType = 'PER PARTAI';
  const { isLoading, mapResultsAllType, globalDapils } = useSelector<
    AppRootState,
    SettingStoreState
  >(selector);

  const setApplicationName = useCallback(
    (applicationName: string) =>
      SettingAction.setApplicationName(applicationName)(dispatch),
    [dispatch]
  );
  const setGlobalPeriodId = useCallback(
    (globalPeriodId: number) =>
      SettingAction.setGlobalPeriodId(globalPeriodId)(dispatch),
    [dispatch]
  );
  const setGlobalTypeId = useCallback(
    (globalTypeId: number) =>
      SettingAction.setGlobalTypeId(globalTypeId)(dispatch),
    [dispatch]
  );
  const setDefaultChartType = useCallback(
    (defaultChartType: string) => 
      SettingAction.setDefaultChartType(defaultChartType)(dispatch),
      [dispatch]
    );
  const setMapResultAllType = useCallback(
    (mapResult: MapResultEntity) =>
      SettingAction.setMapResultsAllType(mapResult)(dispatch),
    [dispatch]
  );
  const setLoading = useCallback(
    (isLoading: boolean) => SettingAction.setLoading(isLoading)(dispatch),
    [dispatch]
  );
  const removeItemMapResultAllType = useCallback(
    (period: string, type: string) =>
      SettingAction.removeItemMapResultAllType(period, type)(dispatch),
    [dispatch]
  );
  const getGlobalDapils = useCallback(
    (name?: string, province?: string, type?: string, period?: string) =>
      SettingAction.getGlobalDapilAction(name, province, type, period)(dispatch),
    [dispatch]
  );

  return {
    applicationName,
    isLoading,
    globalPeriodId,
    globalTypeId,
    defaultChartType,
    mapResultsAllType,
    globalDapils,
    setApplicationName,
    setGlobalPeriodId,
    setGlobalTypeId,
    setDefaultChartType,
    setMapResultAllType,
    setLoading,
    removeItemMapResultAllType,
    getGlobalDapils,
  };
};

export { settingStoreImplementation };
