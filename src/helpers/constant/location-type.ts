import { LocationActionType } from "src/data/action-type/location-action-type";
import { DefaultValue } from "./default-value";
import { Endpoint } from "./endpoint";

export const LocationType = {
    [DefaultValue.Location.Province] : {
        endpoint: Endpoint.provinces,
        getAllActionType: LocationActionType.GET_PROVINCES,
        getByIdActionType: LocationActionType.GET_PROVINCE_BY_ID,
        submitActionType: LocationActionType.SUBMIT_PROVINCE,
        updateActionType: LocationActionType.UPDATE_PROVINCE,
        removeActionType: LocationActionType.REMOVE_PROVINCE,
        getAllActionTypeModal: LocationActionType.GET_PROVINCES_MODAL,
        getByIdActionTypeModal: LocationActionType.GET_PROVINCE_BY_ID_MODAL,
    },
    [DefaultValue.Location.District]: {
        endpoint: Endpoint.district,
        getAllActionType: LocationActionType.GET_DISTRICS,
        getByIdActionType: LocationActionType.GET_DISTRICT_BY_ID,
        submitActionType: LocationActionType.SUBMIT_DISTRICT,
        updateActionType: LocationActionType.UPDATE_DISTRICT,
        removeActionType: LocationActionType.REMOVE_DISTRICT,
        getAllActionTypeModal: LocationActionType.GET_DISTRICS_MODAL,
        getByIdActionTypeModal: LocationActionType.GET_DISTRICT_BY_ID_MODAL,
    },
    [DefaultValue.Location.Regency]:{
        endpoint: Endpoint.regencies,
        getAllActionType: LocationActionType.GET_REGENCIES,
        getByIdActionType: LocationActionType.GET_REGENCY_BY_ID,
        submitActionType: LocationActionType.SUBMIT_REGENCY,
        updateActionType: LocationActionType.UPDATE_REGENCY,
        removeActionType: LocationActionType.REMOVE_REGENCY,
        getAllActionTypeModal: LocationActionType.GET_REGENCIES_MODAL,
        getByIdActionTypeModal: LocationActionType.GET_REGENCY_BY_ID_MODAL,
    },
    [DefaultValue.Location.Village]: {
        endpoint: Endpoint.villages,
        getAllActionType: LocationActionType.GET_VILLAGES,
        getByIdActionType: LocationActionType.GET_VILLAGE_BY_ID,
        submitActionType: LocationActionType.SUBMIT_VILLAGE,
        updateActionType: LocationActionType.UPDATE_VILLAGE,
        removeActionType: LocationActionType.REMOVE_VILLAGE,
        getAllActionTypeModal: LocationActionType.GET_VILLAGES_MODAL,
        getByIdActionTypeModal: LocationActionType.GET_VILLAGE_BY_ID_MODAL,
    },
    [DefaultValue.Location.TPS]: {
        endpoint: Endpoint.tps,
        getAllActionType: LocationActionType.GET_TPS,
        getByIdActionType: LocationActionType.GET_TPS_BY_ID,
        submitActionType: LocationActionType.SUBMIT_TPS,
        updateActionType: LocationActionType.UPDATE_TPS,
        removeActionType: LocationActionType.REMOVE_TPS,
        getAllActionTypeModal: "",
        getByIdActionTypeModal: "",
    },
}

