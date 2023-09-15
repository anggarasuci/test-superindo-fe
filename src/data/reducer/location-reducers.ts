import type { AnyAction } from "redux";
import { LocationStore } from "src/domain/store/location-store";
import { MapStateReducers } from "src/helpers/map-state-reducers";
import { LocationActionType } from "../action-type/location-action-type";

type LocationStoreState = Omit<
  LocationStore,
  "getLocations" | "submit" | "remove" | "selectLocation"
>;

const INITIAL_STATE: LocationStoreState = {
  provinces: undefined,
  provinceById: undefined,
  regencies: undefined,
  regencyById: undefined,
  districts: undefined,
  districtById: undefined,
  villages: undefined,
  villageById: undefined,
  validation: undefined,
  status: undefined,
  tps: undefined,
  tpsById: undefined,

  provincesModal: undefined,
  provinceByIdModal: undefined,
  regenciesModal: undefined,
  regencyByIdModal: undefined,
  districtsModal: undefined,
  districtByIdModal: undefined,
  villagesModal: undefined,
  villageByIdModal: undefined,
};

const locationReducer = (
  state: LocationStoreState = INITIAL_STATE,
  action: AnyAction
) => {
  if (action.payload?.status?.isError)
    return {
      ...state,
      status: action.payload?.status,
      validation: action.payload?.validation ?? [],
    };

  switch (action.type) {
    ////////PROVINCE///////////
    case LocationActionType.GET_PROVINCES:
      return {
        ...state,
        provinces: action.payload.data ?? [],
        status: action?.payload?.status,
        validation: action?.payload?.validation ?? [],
      };
    case LocationActionType.SUBMIT_PROVINCE:
      return {
        ...state,
        // provinces: MapStateReducers.addItemStateList(
        //   state?.provinces,
        //   action.payload?.data ?? {}
        // ),
        status: action.payload?.status,
        validation: action.payload?.validation ?? [],
      };
    case LocationActionType.UPDATE_PROVINCE:
      return {
        ...state,
        // provinces: MapStateReducers.updateStateList(state?.provinces, [
        //   action.payload?.data ?? {},
        // ]),
        status: action.payload?.status,
        validation: action.payload?.validation ?? [],
      };
    case LocationActionType.REMOVE_PROVINCE:
      return {
        ...state,
        provinces: MapStateReducers.removeItemStateList(
          state?.provinces,
          action.payload
        ),
        status: action.payload?.status,
        validation: action.payload?.validation ?? [],
      };
    case LocationActionType.GET_PROVINCE_BY_ID:
      return {
        ...state,
        provinceById: MapStateReducers.setStateFromStateList(
          state?.provinces,
          action.payload
        ),
        status: action.payload?.status,
        validation: action.payload?.validation ?? [],
      };

    /////////REGENCY///////////////
    case LocationActionType.GET_REGENCIES:
      return {
        ...state,
        regencies: action.payload.data ?? [],
        status: action?.payload?.status,
        validation: action?.payload?.validation ?? [],
      };
    case LocationActionType.SUBMIT_REGENCY:
      return {
        ...state,
        // regencies: MapStateReducers.addItemStateList(
        //   state?.regencies,
        //   action.payload?.data ?? {}
        // ),
        status: action.payload?.status,
        validation: action.payload?.validation ?? [],
      };
    case LocationActionType.UPDATE_REGENCY:
      return {
        ...state,
        // regencies: MapStateReducers.updateStateList(state?.regencies, [
        //   action.payload?.data ?? {},
        // ]),
        status: action.payload?.status,
        validation: action.payload?.validation ?? [],
      };
    case LocationActionType.REMOVE_REGENCY:
      return {
        ...state,
        regencies: MapStateReducers.removeItemStateList(
          state?.regencies,
          action.payload
        ),
        status: action.payload?.status,
        validation: action.payload?.validation ?? [],
      };
    case LocationActionType.GET_REGENCY_BY_ID:
      return {
        ...state,
        regencyById: MapStateReducers.setStateFromStateList(
          state?.regencies,
          action.payload
        ),
        status: action.payload?.status,
        validation: action.payload?.validation ?? [],
      };

    ////// DISTRICT///////////
    case LocationActionType.GET_DISTRICS:
      return {
        ...state,
        districts: action.payload.data ?? [],
        status: action?.payload?.status,
        validation: action?.payload?.validation ?? [],
      };
    case LocationActionType.SUBMIT_DISTRICT:
      return {
        ...state,
        // districts: MapStateReducers.addItemStateList(
        //   state?.districts,
        //   action.payload?.data ?? {}
        // ),
        status: action.payload?.status,
        validation: action.payload?.validation ?? [],
      };
    case LocationActionType.UPDATE_DISTRICT:
      return {
        ...state,
        // districts: MapStateReducers.updateStateList(state?.districts, [
        //   action.payload?.data ?? {},
        // ]),
        status: action.payload?.status,
        validation: action.payload?.validation ?? [],
      };
    case LocationActionType.REMOVE_DISTRICT:
      return {
        ...state,
        districts: MapStateReducers.removeItemStateList(
          state?.districts,
          action.payload
        ),
        status: action.payload?.status,
        validation: action.payload?.validation ?? [],
      };
    case LocationActionType.GET_DISTRICT_BY_ID:
      return {
        ...state,
        districtById: MapStateReducers.setStateFromStateList(
          state?.districts,
          action.payload
        ),
        status: action.payload?.status,
        validation: action.payload?.validation ?? [],
      };

    ///////// VILLAGE //////////
    case LocationActionType.GET_VILLAGES:
      return {
        ...state,
        villages: action.payload.data ?? [],
        status: action?.payload?.status,
        validation: action?.payload?.validation ?? [],
      };
    case LocationActionType.SUBMIT_VILLAGE:
      return {
        ...state,
        // villages: MapStateReducers.addItemStateList(
        //   state?.villages,
        //   action.payload?.data ?? {}
        // ),
        status: action.payload?.status,
        validation: action.payload?.validation ?? [],
      };
    case LocationActionType.UPDATE_VILLAGE:
      return {
        ...state,
        // villages: MapStateReducers.updateStateList(state?.villages, [
        //   action.payload?.data ?? {},
        // ]),
        status: action.payload?.status,
        validation: action.payload?.validation ?? [],
      };
    case LocationActionType.REMOVE_VILLAGE:
      return {
        ...state,
        villages: MapStateReducers.removeItemStateList(
          state?.villages,
          action.payload
        ),
        status: action.payload?.status,
        validation: action.payload?.validation ?? [],
      };
    case LocationActionType.GET_VILLAGE_BY_ID:
      return {
        ...state,
        villageById: MapStateReducers.setStateFromStateList(
          state?.villages,
          action.payload
        ),
        status: action.payload?.status,
        validation: action.payload?.validation ?? [],
      };

    ////////TPS///////////
    case LocationActionType.GET_TPS:
      return {
        ...state,
        tps: action.payload.data ?? [],
        status: action?.payload?.status,
        validation: action?.payload?.validation ?? [],
      };
    case LocationActionType.SUBMIT_TPS:
      return {
        ...state,
        // tps: MapStateReducers.addItemStateList(
        //   state?.tps,
        //   action.payload?.data ?? {}
        // ),
        status: action.payload?.status,
        validation: action.payload?.validation ?? [],
      };
    case LocationActionType.UPDATE_TPS:
      return {
        ...state,
        // tps: MapStateReducers.updateStateList(state?.tps, [
        //   action.payload?.data ?? {},
        // ]),
        status: action.payload?.status,
        validation: action.payload?.validation ?? [],
      };
    case LocationActionType.REMOVE_TPS:
      return {
        ...state,
        tps: MapStateReducers.removeItemStateList(state?.tps, action.payload),
        status: action.payload?.status,
        validation: action.payload?.validation ?? [],
      };
    case LocationActionType.GET_TPS_BY_ID:
      return {
        ...state,
        tpsById: MapStateReducers.setStateFromStateList(
          state?.tps,
          action.payload
        ),
        status: action.payload?.status,
        validation: action.payload?.validation ?? [],
      };

    //////MODAL///////
    case LocationActionType.GET_PROVINCES_MODAL:
      return {
        ...state,
        provincesModal: state.provinces, //action.payload?.data ?? [],
        status: action?.payload?.status,
        validation: action?.payload?.validation ?? [],
      };
    case LocationActionType.GET_PROVINCE_BY_ID_MODAL:
      return {
        ...state,
        provinceByIdModal: MapStateReducers.setStateFromStateList(
          state?.provinces,
          action.payload
        ),
        status: action.payload?.status,
        validation: action.payload?.validation ?? [],
      };

    case LocationActionType.GET_REGENCIES_MODAL:
      return {
        ...state,
        regenciesModal: action?.payload?.data ?? [],
        status: action?.payload?.status ?? {},
        validation: action?.payload?.validation ?? [],
      };
    case LocationActionType.GET_REGENCY_BY_ID_MODAL:
      return {
        ...state,
        regencyByIdModal: MapStateReducers.setStateFromStateList(
          state?.regenciesModal,
          action.payload
        ),
      };

    case LocationActionType.GET_DISTRICS_MODAL:
      return {
        ...state,
        districtsModal: action.payload.data ?? [],
        status: action?.payload?.status,
        validation: action?.payload?.validation ?? [],
      };
    case LocationActionType.GET_DISTRICT_BY_ID_MODAL:
      return {
        ...state,
        districtByIdModal: MapStateReducers.setStateFromStateList(
          state?.districtsModal,
          action.payload
        ),
        status: action.payload?.status,
        validation: action.payload?.validation ?? [],
      };

    case LocationActionType.GET_VILLAGES_MODAL:
      return {
        ...state,
        villagesModal: action.payload.data ?? [],
        status: action?.payload?.status,
        validation: action?.payload?.validation ?? [],
      };
    case LocationActionType.GET_VILLAGE_BY_ID_MODAL:
      return {
        ...state,
        villageByIdModal: MapStateReducers.setStateFromStateList(
          state?.villagesModal,
          action.payload
        ),
        status: action.payload?.status,
        validation: action.payload?.validation ?? [],
      };

    default:
      return state;
  }
};

export { locationReducer };
export type { LocationStoreState };
