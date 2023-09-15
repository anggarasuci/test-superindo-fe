import { ResultDapilStore } from "src/domain/store/result-dapil-store";

const getResultDapilRegionUseCase = async (
  store: ResultDapilStore,
  province: string,
  period: string,
  type: string,
  candidate?: string | "0",
  regency?: string | "",
) => {
  await store.getResultRegion(candidate ?? "0", period, type, province, regency);
};

export { getResultDapilRegionUseCase };
