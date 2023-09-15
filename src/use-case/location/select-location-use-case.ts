import { LocationStore } from "src/domain/store/location-store";

const selectLocationUseCase = (
  store: LocationStore,
  locationTypeKey: string,
  id: string | "",
  isFromModal?: boolean
) => {
  store.selectLocation(locationTypeKey, id, isFromModal);
};

export { selectLocationUseCase };
