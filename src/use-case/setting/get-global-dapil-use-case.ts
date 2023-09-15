import { SettingStore } from "src/domain/store/setting-store";

const getGlobalDapilUseCase = async (
  store: SettingStore,
  name?: string | "",
  province?: string,
  type?: string,
  period?: string
) => {
  await store.getGlobalDapils(name, province, type, period);
};

export { getGlobalDapilUseCase };
