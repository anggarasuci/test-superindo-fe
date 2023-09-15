import { DapilStore } from "src/domain/store/dapil-store";

const getDapilUseCase = async (
  store: DapilStore,
  name?: string | "",
  province?: string,
  type?: string,
  period?: string
) => {
  await store.getDapils(name, province, type, period);
};

export { getDapilUseCase };
