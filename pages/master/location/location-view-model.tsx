import { useCallback, useEffect, useState } from "react";
import { LocationActionType } from "src/data/action-type/location-action-type";
import { locationStoreImplementation } from "src/data/store-implementation/location-store-implementation";
import { settingStoreImplementation } from "src/data/store-implementation/setting-store-implementation";
import { DefaultValue } from "src/helpers/constant/default-value";
import { LocationType } from "src/helpers/constant/location-type";
import { LocationUtils } from "src/helpers/location-utils";
import { MapStateReducers } from "src/helpers/map-state-reducers";
import { getLocationUseCase } from "src/use-case/location/get-location-use-case";
import { removeLocationUseCase } from "src/use-case/location/remove-location-use-case";
import { selectLocationUseCase } from "src/use-case/location/select-location-use-case";
import { submitLocationUseCase } from "src/use-case/location/submit-location-use-case";

const LocationViewModel = (locationTypeKey: string) => {
  const locationStore = locationStoreImplementation();
  const settingStore = settingStoreImplementation();
  const [showAlert, setShowAlert] = useState<boolean>(false);
  const [parentIdCurrentPage, setParentIdCurrentPage] = useState<string>("");
  const [parentLocationKey, setParentLocationKey] = useState<string>("");
  const referenceLocations = DefaultValue.Params.locations;
  const [searchKeyword, setSearchKeyword] = useState<string>("");

  const getChildKey = (
    currentKey: string,
    parentId: string,
    isFromModal: boolean
  ) => {
    const length = DefaultValue.Params.locations.length;
    const hierarchyIdx = DefaultValue.Params.locations.indexOf(currentKey);
    const pageHierarchyIdx =
      DefaultValue.Params.locations.indexOf(locationTypeKey);
    // if (hierarchyIdx + 1 == pageHierarchyIdx && !isFromModal)
    //   setParentIdCurrentPage(parentId);
    const isParentIdx = hierarchyIdx + 1 == pageHierarchyIdx;
    // if (isParentIdx) setParentIdCurrentPage(parentId);
    // if (isParentIdx && !isFromModal) setParentIdCurrentPage(parentId);
    if (!isFromModal) setParentIdCurrentPage(isParentIdx ? parentId : "");
    // if (!isFromModal) setParentLocationKey(isParentIdx ? DefaultValue.Params.locations[hierarchyIdx] : "");
    // const key =
    //   hierarchyIdx >= length - 1 || hierarchyIdx == pageHierarchyIdx
    // const key =
    //   hierarchyIdx >= length || hierarchyIdx == pageHierarchyIdx
    const key =
      hierarchyIdx == pageHierarchyIdx
        ? ""
        : referenceLocations[hierarchyIdx + 1];
    if (key != "") LocationUtils.clearDataStateReducers(key, isFromModal);

    return key;
  };

  const copyProvince = () => {
    MapStateReducers.setState(LocationActionType.GET_PROVINCES_MODAL, {
      data: locationStore.provinces,
    });
    MapStateReducers.setState(
      LocationActionType.GET_PROVINCE_BY_ID_MODAL,
      locationStore.provinceById?.id
    );
  };

  const copyRegency = () => {
    MapStateReducers.setState(LocationActionType.GET_REGENCIES_MODAL, {
      data: locationStore.regencies,
    });
    MapStateReducers.setState(
      LocationActionType.GET_REGENCY_BY_ID_MODAL,
      locationStore.regencyById?.id
    );
  };

  const copyDistrict = () => {
    MapStateReducers.setState(LocationActionType.GET_DISTRICS_MODAL, {
      data: locationStore.districts,
    });
    MapStateReducers.setState(
      LocationActionType.GET_DISTRICT_BY_ID_MODAL,
      locationStore.districtById?.id
    );
  };

  const copyVillage = () => {
    MapStateReducers.setState(LocationActionType.GET_VILLAGES_MODAL, {
      data: locationStore.villages,
    });
    MapStateReducers.setState(
      LocationActionType.GET_VILLAGE_BY_ID_MODAL,
      locationStore.villageById?.id
    );
  };

  const copyStateToModal = (currentKey: string) => {
    switch (currentKey) {
      case DefaultValue.Location.Regency: {
        copyProvince();
      }
      case DefaultValue.Location.District: {
        copyProvince();
        copyRegency();
      }
      case DefaultValue.Location.Village: {
        copyProvince();
        copyRegency();
        copyDistrict();
      }
      case DefaultValue.Location.TPS: {
        copyProvince();
        copyRegency();
        copyDistrict();
        copyVillage();
      }
    }
  };

  useEffect(() => {
    if (locationTypeKey === DefaultValue.Location.Province) return;
    getReferenceLocations(DefaultValue.Location.Province, "");
  }, [dispatchEvent]);

  const getReferenceLocations = useCallback(
    async (key, parentId, searchKeyword?, isFromModal?) => {
      await getLocationUseCase(
        locationStore,
        key,
        searchKeyword ?? "",
        true,
        parentId,
        isFromModal
      );
    },
    [locationStore]
  );

  const onSearchClicked = useCallback(
    async (name?: string) => {
      getReferenceLocations(
        locationTypeKey,
        parentIdCurrentPage,
        name ?? "",
        false
      );
      setSearchKeyword(name);
    },
    [locationStore]
  );

  const onSubmitClicked = useCallback(
    async (isEdit: boolean, code: string, name: string) => {
      await submitLocationUseCase(
        locationStore,
        locationTypeKey,
        isEdit,
        code,
        name,
        locationStore.provinceByIdModal?.id ??
          locationStore.provinceById?.id ??
          "",
        locationStore.regencyByIdModal?.id ??
          locationStore.regencyById?.id ??
          "",
        locationStore.districtByIdModal?.id ??
          locationStore.districtById?.id ??
          "",
        locationStore.villageByIdModal?.id ??
          locationStore.villageById?.id ??
          ""
      );
      setShowAlert(true);
      if (parentIdCurrentPage != "") onSearchClicked(searchKeyword);
      else setParentIdCurrentPage("");
    },
    [locationStore]
  );

  const onRemoveClicked = useCallback(
    async (code: string) => {
      await removeLocationUseCase(locationStore, locationTypeKey, code);
      setShowAlert(true);
    },
    [locationStore]
  );

  const onCloseAlert = useCallback(() => {
    setShowAlert(false);
  }, []);

  const onSelectReference = useCallback(
    async (key: string, referenceId: string, isFromModal?: boolean | false) => {
      //set parent
      selectLocationUseCase(locationStore, key, referenceId, isFromModal);

      //get child reference
      let childKey = getChildKey(key, referenceId, isFromModal);
      childKey != ""
        ? getReferenceLocations(childKey, referenceId, "", isFromModal)
        : null;
    },
    [locationStore]
  );

  const onClearDataModal = useCallback(
    (isEdit: boolean) => {
      isEdit
        ? copyStateToModal(locationTypeKey)
        : getChildKey(
            DefaultValue.Location.Province,
            locationStore.provinceByIdModal?.id ?? "",
            true
          );
    },
    [locationStore]
  );

  return {
    isShowAlert: showAlert,
    isLoading: settingStore.isLoading,
    isParentIdAvailable:
      parentIdCurrentPage != "" ||
      locationTypeKey == DefaultValue.Location.Province,
    locations: LocationUtils.getStoreList(locationTypeKey, locationStore),
    status: locationStore.status,
    referenceLocations: referenceLocations.slice(
      0,
      referenceLocations.indexOf(locationTypeKey)
    ),
    provinces: locationStore.provinces,
    regencies: locationStore.regencies,
    districts: locationStore.districts,
    villages: locationStore.villages,

    selectedProvinceId: locationStore.provinceById?.id ?? "",
    selectedRegencyId: locationStore.regencyById?.id ?? "",
    selectedDistrictId: locationStore.districtById?.id ?? "",
    selectedVillageId: locationStore.villageById?.id ?? "",

    provincesModal: locationStore.provinces,
    regenciesModal: locationStore.regenciesModal,
    districtsModal: locationStore.districtsModal,
    villagesModal: locationStore.villagesModal,

    selectedProvinceIdModal: locationStore.provinceByIdModal?.id ?? "",
    selectedRegencyIdModal: locationStore.regencyByIdModal?.id ?? "",
    selectedDistrictIdModal: locationStore.districtByIdModal?.id ?? "",
    selectedVillageIdModal: locationStore.villageByIdModal?.id ?? "",

    onSearchClicked,
    onSubmitClicked,
    onRemoveClicked,
    onCloseAlert,
    onSelectReference,
    onClearDataModal,
  };
};

export default LocationViewModel;
