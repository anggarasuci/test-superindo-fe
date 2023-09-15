import { LocationService } from "src/data/service/location-service";
import { DefaultValue } from "src/helpers/constant/default-value";
import { mapResponse } from "src/helpers/map-response";
import {
  LocationEntity,
  RequestLocationEntity,
} from "../entity/location-entity";
import { ResponseEntity } from "../entity/response-entity";

const getLocations = async (
  actionType: string,
  locationTypeKey: string,
  value?: string,
  withReference?: boolean | false,
  referenceValue?: string
): Promise<ResponseEntity<[LocationEntity]>> => {
  const hierarchyIdx = DefaultValue.Params.locations.indexOf(locationTypeKey);
  const reference =
    !withReference || hierarchyIdx == 0
      ? ""
      : `?${DefaultValue.Params.locations[hierarchyIdx - 1]}=${referenceValue}`;

  const params =
    reference === ""
      ? `?${DefaultValue.Params.search}=${value ?? ""}`
      : `${reference}&${DefaultValue.Params.search}=${value ?? ""}`;

  return mapResponse(
    await LocationService.getLocations(actionType, locationTypeKey, params)
  );
};

const getLocationById = async (
  actionType: string,
  locationTypeKey: string,
  id: string
): Promise<ResponseEntity<LocationEntity>> => {
  return mapResponse(
    await LocationService.getLocationById(actionType, locationTypeKey, id)
  );
};

const submit = async (
  actionType: string,
  locationTypeKey: string,
  isEdit: boolean,
  request: RequestLocationEntity
): Promise<ResponseEntity<LocationEntity>> => {
  return mapResponse(
    await LocationService.submit(actionType, locationTypeKey, isEdit, request)
  );
};

const remove = async (
  actionType: string,
  locationTypeKey: string,
  id: string
): Promise<ResponseEntity<LocationEntity>> => {
  return mapResponse(
    await LocationService.remove(actionType, locationTypeKey, id)
  );
};

export const LocationRepository = {
  getLocations,
  getLocationById,
  submit,
  remove,
};
