import { SettingStore } from "src/domain/store/setting-store";

const setGlobalTypeIdUseCase = (store: SettingStore, globalTypeId: number) => {
  store.setGlobalTypeId(globalTypeId)
};

export { setGlobalTypeIdUseCase };
