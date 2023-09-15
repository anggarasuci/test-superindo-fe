import { RequestAdditionalField } from "src/domain/entity/base-dapil-entity";
import { BaseDapilStore } from "src/domain/store/base-dapil-store";

const updateAdditionalFieldUseCase = async (
  store: BaseDapilStore,
  name: string,
  province: string,
  id: number,
  period: number,
  type: number,
  struktur_dprt: string,
  indeks_value: string,
  target_kursi: string
) => {
  const param = getRequest(
    name,
    province,
    id,
    period,
    type,
    struktur_dprt,
    indeks_value,
    target_kursi
  );
  await store.updateAdditionalField(param);
};

const getRequest = (
  name: string,
  province: string,
  id: number,
  period: number,
  type: number,
  struktur_dprt: string,
  indeks_value: string,
  target_kursi: string
): RequestAdditionalField => {
  return {
    name: name,
    province: province,
    id: id,
    period: period,
    type: type,
    struktur_dprt: struktur_dprt,
    indeks_value: indeks_value,
    target_kursi: target_kursi,
  };
};

export { updateAdditionalFieldUseCase };
