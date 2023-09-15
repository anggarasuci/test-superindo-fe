import { SettingStore } from "src/domain/store/setting-store";

const setLoadingUseCase = (store: SettingStore, isLoading: boolean) => {
  store.setLoading(isLoading);
};

export { setLoadingUseCase };
