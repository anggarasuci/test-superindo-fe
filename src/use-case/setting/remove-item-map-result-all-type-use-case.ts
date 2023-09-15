import { SettingStore } from "src/domain/store/setting-store";

const removeItemMapResultAllTypeUseCase = (store: SettingStore, period: string, type: string) => {
  store.removeItemMapResultAllType(period, type);
};

export { removeItemMapResultAllTypeUseCase };
