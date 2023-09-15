import { MapResultEntity } from "src/domain/entity/map-result-entity";
import { SettingStore } from "src/domain/store/setting-store";

const setMapResultAllTypeUseCase = (
  store: SettingStore,
  mapResult: MapResultEntity,
  mapType: "city" | "province",
  period: string,
  type: string
) => {
  const temp = {
    ...mapResult,
    mapType: mapType,
    period: period,
    type: type,
  };
  store.setMapResultAllType(temp);
};

export { setMapResultAllTypeUseCase };
