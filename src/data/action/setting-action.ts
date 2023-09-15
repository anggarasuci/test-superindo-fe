import { MapResultEntity } from "src/domain/entity/map-result-entity";
import { SettingRepository } from "src/domain/repository/setting-repository";
import { SettingActionType } from "../action-type/setting-action-type";

const setApplicationName = (applicationName: string) => (dispatch: any) => {
  dispatch({ type: SettingActionType.SET_APPLICATION_NAME, applicationName });
};

const setGlobalPeriodId = (globalPeriodId: number) => (dispatch: any) => {
  dispatch({ type: SettingActionType.SET_GLOBAL_PERIOD_ID, globalPeriodId });
};

const setGlobalTypeId = (globalTypeId: number) => (dispatch: any) => {
  dispatch({ type: SettingActionType.SET_GLOBAL_TYPE_ID, globalTypeId });
};

const setDefaultChartType = (defaultChartType: string) => (dispatch: any) => {
  dispatch({ type: SettingActionType.SET_DEFAULT_CHART_TYPE, defaultChartType });
};

const setMapResultsAllType =
  (mapResult: MapResultEntity) => (dispatch: any) => {
    dispatch({ type: SettingActionType.SET_MAP_RESULT_ALL_TYPE, mapResult });
  };

const setLoading = (isLoading: boolean) => (dispatch: any) => {
  dispatch({ type: SettingActionType.SET_LOADING, isLoading });
};

const removeItemMapResultAllType =
  (period: string, type: string) => (dispatch: any) => {
    dispatch({
      type: SettingActionType.REMOVE_ITEM_MAP_RESULT_ALL_TYPE,
      payload: { period, type },
    });
  };

const getGlobalDapilAction =
  (name?: string, province?: string, type?: string, period?: string) =>
  async (dispatch: any) => {
    dispatch({ type: SettingActionType.SET_LOADING, isLoading: true });
    const response = await SettingRepository.getGlobalDapils(name, province, type, period);
    dispatch({
      type: SettingActionType.GET_GLOBAL_DAPILS,
      payload: response,
    });
    dispatch({ type: SettingActionType.SET_LOADING, isLoading: false });
    return response;
  };

export const SettingAction = {
  setApplicationName,
  setGlobalPeriodId,
  setGlobalTypeId,
  setDefaultChartType,
  setMapResultsAllType,
  setLoading,
  removeItemMapResultAllType,
  getGlobalDapilAction
};
