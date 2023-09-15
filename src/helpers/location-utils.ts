import { LocationActionType } from "src/data/action-type/location-action-type";
import { RequestLocationEntity } from "src/domain/entity/location-entity";
import { LocationStore } from "src/domain/store/location-store";
import { DefaultValue } from "./constant/default-value";
import { MapStateReducers } from "./map-state-reducers";

const getStoreList = (key: string, locationStore: LocationStore) => {
  return key === DefaultValue.Location.Province
    ? locationStore.provinces
    : key === DefaultValue.Location.District
    ? locationStore.districts
    : key === DefaultValue.Location.Regency
    ? locationStore.regencies
    : key === DefaultValue.Location.Village
    ? locationStore.villages
    : locationStore.tps;
};

const getStoreId = (key: string, locationStore: LocationStore) => {
  return key === DefaultValue.Location.Province
    ? locationStore.provinceById
    : key === DefaultValue.Location.District
    ? locationStore.districtById
    : key === DefaultValue.Location.Regency
    ? locationStore.regencyById
    : key === DefaultValue.Location.Village
    ? locationStore.villageById
    : locationStore.tpsById;
};

const getActionTypeList = (key: string, isFilter: boolean) => {
  return key === DefaultValue.Location.Province
    ? isFilter
      ? LocationActionType.GET_PROVINCES
      : LocationActionType.GET_PROVINCES_MODAL
    : key === DefaultValue.Location.District
    ? isFilter
      ? LocationActionType.GET_DISTRICS
      : LocationActionType.GET_DISTRICS_MODAL
    : key === DefaultValue.Location.Regency
    ? isFilter
      ? LocationActionType.GET_REGENCIES
      : LocationActionType.GET_REGENCIES_MODAL
    : key === DefaultValue.Location.Village
    ? isFilter
      ? LocationActionType.GET_VILLAGES
      : LocationActionType.GET_VILLAGES_MODAL
    : isFilter
    ? LocationActionType.GET_TPS
    : "";
};

const getActionTypeById = (key: string, isFilter: boolean) => {
  return key === DefaultValue.Location.Province
    ? isFilter
      ? LocationActionType.GET_PROVINCE_BY_ID
      : LocationActionType.GET_PROVINCE_BY_ID_MODAL
    : key === DefaultValue.Location.District
    ? isFilter
      ? LocationActionType.GET_DISTRICT_BY_ID
      : LocationActionType.GET_DISTRICT_BY_ID_MODAL
    : key === DefaultValue.Location.Regency
    ? isFilter
      ? LocationActionType.GET_REGENCY_BY_ID
      : LocationActionType.GET_REGENCY_BY_ID_MODAL
    : key === DefaultValue.Location.Village
    ? isFilter
      ? LocationActionType.GET_VILLAGE_BY_ID
      : LocationActionType.GET_VILLAGE_BY_ID_MODAL
    : isFilter
    ? LocationActionType.GET_TPS_BY_ID
    : "";
};

const mapRequestLocation = (key: string, request: RequestLocationEntity) => {
  switch (key) {
    case DefaultValue.Location.Province: {
      delete request.province;
      delete request.regency;
      delete request.district;
      delete request.village;
    }
    case DefaultValue.Location.Regency: {
      delete request.regency;
      delete request.district;
      delete request.village;
    }
    case DefaultValue.Location.District: {
      delete request.province;
      delete request.district;
      delete request.village;
    }
    case DefaultValue.Location.Village: {
      delete request.province;
      delete request.regency;
      delete request.village;
    }
  }
  return request;
};

const clearDataStateReducers = (currentKey: string, isFromModal: boolean) => {
  const length = DefaultValue.Params.locations.length;
  const hierarchyIdx = DefaultValue.Params.locations.indexOf(currentKey);
  // if (hierarchyIdx + 1 >= length) return;
  if (hierarchyIdx >= length) return;

  // const referenceClears = DefaultValue.Params.locations.slice(
  //   hierarchyIdx + 1,
  //   length
  // );
  const referenceClears = DefaultValue.Params.locations.slice(
    hierarchyIdx,
    length
  );
  referenceClears.map((key) => {
    MapStateReducers.clearState(
      LocationUtils.getActionTypeList(key, !isFromModal)
    );
    MapStateReducers.clearState(getActionTypeById(key, !isFromModal));
  });
  if (isFromModal)
    MapStateReducers.clearState(
      getActionTypeById(DefaultValue.Location.Province, !isFromModal)
    );
};

const getDisplayType = (value: string) => {
  switch (value) {
    case DefaultValue.Location.Province: return DefaultValue.LocationDisplay.Province
    case DefaultValue.Location.District: return DefaultValue.LocationDisplay.District
    case DefaultValue.Location.Regency: return DefaultValue.LocationDisplay.Regency
    case DefaultValue.Location.Village: return DefaultValue.LocationDisplay.Village
    case DefaultValue.Location.TPS: return DefaultValue.LocationDisplay.TPS
  }
}

export const LocationUtils = {
  getStoreList,
  getStoreId,
  getActionTypeList,
  mapRequestLocation,
  getActionTypeById,
  clearDataStateReducers,
  getDisplayType
};
