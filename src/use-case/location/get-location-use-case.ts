import { LocationStore } from "src/domain/store/location-store";

const getLocationUseCase = async (
  store: LocationStore,
  locationTypeKey: string,
  value?: string | "",
  withReference?: boolean | false,
  referenceValue?: string,
  isFromModal?: boolean | false,
) => {
  await store.getLocations(locationTypeKey, value, withReference, referenceValue, isFromModal);
};

export { getLocationUseCase };
