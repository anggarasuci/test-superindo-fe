import getConfig from "next/config";
import { RequestLocationEntity } from "src/domain/entity/location-entity";
import { LocationType } from "src/helpers/constant/location-type";
import { LocationUtils } from "src/helpers/location-utils";
import { fetchWrapper } from "../../helpers/fetch-wrapper";

const { publicRuntimeConfig } = getConfig();
const baseUrl = `${publicRuntimeConfig.apiUrl}`;

const getLocations = async (
  actionType: string,
  locationTypeKey: string,
  params?: string
) => {
  return fetchWrapper.get(
    actionType,
    // `${baseUrl}/villages/?province=32&search=`
    // `${baseUrl}/villages/?search=sumedang`
    // `${baseUrl}/villages/?province=31&search=`
    `${baseUrl}${LocationType[locationTypeKey]?.endpoint}${params}`
  );
};

const getLocationById = async (
  actionType: string,
  locationTypeKey: string,
  id: string
) => {
  return fetchWrapper.get(
    actionType,
    `${baseUrl}${LocationType[locationTypeKey].endpoint}${id}/`
  );
};

const submit = async (
  actionType: string,
  locationTypeKey: string,
  isEdit: boolean,
  request: RequestLocationEntity
) => {
  const requestMap = LocationUtils.mapRequestLocation(locationTypeKey, request);
  return isEdit
    ? fetchWrapper.put(
        actionType,
        `${baseUrl}${LocationType[locationTypeKey].endpoint}${requestMap.id}/`,
        requestMap
      )
    : fetchWrapper.post(
        actionType,
        `${baseUrl}${LocationType[locationTypeKey].endpoint}`,
        requestMap
      );
};

const remove = async (
  actionType: string,
  locationTypeKey: string,
  id: string
) => {
  return fetchWrapper.delete(
    actionType,
    `${baseUrl}${LocationType[locationTypeKey].endpoint}${id}/`
  );
};

export const LocationService = {
  getLocations,
  getLocationById,
  submit,
  remove,
};
