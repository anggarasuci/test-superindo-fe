import { LocationStore } from "src/domain/store/location-store";

const removeLocationUseCase = async (
  store: LocationStore,
  locationTypeKey: string,
  id: string
) => {
  await store.remove(locationTypeKey, id);
};

export { removeLocationUseCase };
