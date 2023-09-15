import { SettingStore } from "src/domain/store/setting-store";

const setGlobalPeriodIdUseCase = (store: SettingStore, globalPeriodId: number) => {
  store.setGlobalPeriodId(globalPeriodId)
};

export { setGlobalPeriodIdUseCase };
