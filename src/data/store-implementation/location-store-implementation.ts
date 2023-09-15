import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RequestLocationEntity } from "src/domain/entity/location-entity";
import { LocationStore } from "src/domain/store/location-store";
import { LocationAction } from "../action/location-action";
import { LocationStoreState } from "../reducer/location-reducers";
import type { AppRootState } from "./app-store-implementation";

const locationSelector = (state: AppRootState) => state.location;

const locationStoreImplementation = (): LocationStore => {
  const {
    provinces,
    districts,
    villages,
    regencies,
    validation,
    provinceById,
    districtById,
    villageById,
    regencyById,
    tps,
    tpsById,
    status,
    provincesModal,
    provinceByIdModal,
    regenciesModal,
    regencyByIdModal,
    districtsModal,
    districtByIdModal,
    villagesModal,
    villageByIdModal,
  } = useSelector<AppRootState, LocationStoreState>(locationSelector);
  const dispatch = useDispatch();

  //overidde from store
  const getLocations = useCallback(
    (
      locationTypeKey: string,
      value?: string,
      withReference?: boolean,
      referenceValue?: string,
      isFromModal?: boolean
    ) =>
      LocationAction.getLocationAction(
        locationTypeKey,
        value,
        withReference,
        referenceValue,
        isFromModal
      )(dispatch),
    [dispatch]
  );

  const submit = useCallback(
    (
      locationTypeKey: string,
      isEdit: boolean,
      request: RequestLocationEntity
    ) =>
      LocationAction.submitAction(locationTypeKey, isEdit, request)(dispatch),
    [dispatch]
  );

  const remove = useCallback(
    (locationTypeKey: string, id: string) =>
      LocationAction.removeAction(locationTypeKey, id)(dispatch),
    [dispatch]
  );

  const selectLocation = useCallback(
    (locationTypeKey: string, id: string, isFromModal?: boolean) =>
      LocationAction.selectLocationAction(locationTypeKey, id, isFromModal)(dispatch),
    [dispatch]
  );

  return {
    provinces,
    provinceById,
    districts,
    districtById,
    villages,
    villageById,
    regencies,
    regencyById,
    tps,
    tpsById,
    validation,
    status,
    provincesModal,
    provinceByIdModal,
    regenciesModal,
    regencyByIdModal,
    districtsModal,
    districtByIdModal,
    villagesModal,
    villageByIdModal,
    getLocations,
    submit,
    remove,
    selectLocation,
  };
};

export { locationStoreImplementation, locationSelector };
