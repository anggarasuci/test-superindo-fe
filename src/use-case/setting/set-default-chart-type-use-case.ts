import { SettingStore } from "src/domain/store/setting-store";

const setDefaultChartTypeUseCase = (store: SettingStore, defaultChartType: string) => {
  store.setDefaultChartType(defaultChartType)
};

export { setDefaultChartTypeUseCase };
