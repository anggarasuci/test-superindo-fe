import { SettingStore } from "src/domain/store/setting-store";

const setApplicationNameUseCase = (store: SettingStore, applicationName: string) => {
  store.setApplicationName(applicationName)
};

export { setApplicationNameUseCase };
