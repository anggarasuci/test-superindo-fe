import type { AnyAction } from "redux";
import { SettingStore } from "src/domain/store/setting-store";
import { SettingActionType } from "../action-type/setting-action-type";

type SettingStoreState = Omit<
  SettingStore,
  | "setApplicationName"
  | "setGlobalPeriodId"
  | "setGlobalTypeId" 
  | "setDefaultChartType"
  | "setMapResultAllType"
  | "setLoading"
  | "removeItemMapResultAllType"
  | "getGlobalDapils"
>;

const INITIAL_STATE: SettingStoreState = {
  isLoading: undefined,
  applicationName: undefined,
  globalPeriodId: undefined,
  globalTypeId: undefined,
  defaultChartType: undefined,
  mapResultsAllType: [],
  globalDapils: undefined
};

const settingReducer = (
  state: SettingStoreState = INITIAL_STATE,
  action: AnyAction
) => {
  switch (action.type) {
    case SettingActionType.SET_LOADING:
      return {
        ...state,
        isLoading: action.isLoading,
      };
    case SettingActionType.SET_APPLICATION_NAME:
      return {
        ...state,
        applicationName: action.applicatonName,
      };
    case SettingActionType.SET_GLOBAL_PERIOD_ID:
      return {
        ...state,
        globalPeriodId: action.globalPeriodId,
      };
    case SettingActionType.SET_GLOBAL_TYPE_ID:
      return {
        ...state,
        globalTypeId: action.globalTypeId,
      };
    case SettingActionType.SET_DEFAULT_CHART_TYPE:
      return {
        ...state,
        defaultChartType: action.defaultChartType,
      };
    case SettingActionType.SET_MAP_RESULT_ALL_TYPE:
      const temp: any[] = state?.mapResultsAllType;
      temp.push(action.mapResult);
      return {
        ...state,
        mapResultsAllType: temp,
      };
    case SettingActionType.REMOVE_ITEM_MAP_RESULT_ALL_TYPE:
      const tempMapResultAllType: any[] = state?.mapResultsAllType.filter(
        (item) => item.period != action?.payload?.period && item.type != action?.payload?.type
      );
      return {
        ...state,
        mapResultsAllType: tempMapResultAllType,
      };
    case SettingActionType.GET_GLOBAL_DAPILS:
      return {
        ...state,
        globalDapils: action.payload.data ?? [],
        status: action?.payload?.status,
        validation: action?.payload?.validation ?? [],
      };
    default:
      return state;
  }
};

export { settingReducer };
export type { SettingStoreState };
