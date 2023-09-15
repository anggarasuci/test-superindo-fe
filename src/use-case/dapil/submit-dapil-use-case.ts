import { DapilEntity, RequestDapilEntity } from "src/domain/entity/dapil-entity";
import { PartyEntity } from "src/domain/entity/party-entity";
import { DapilStore } from "src/domain/store/dapil-store";

const submitDapilUseCase = async (
  store: DapilStore,
  isEdit: boolean,
  id: number| null,
  name: string | "",
  period: number | null,
  type: number | null,
  province: number | null,
  regency: number | null,
  district: number | null,
  village: number | null,
  tps: number | null,
  jumlah_total_dpt: number | null,
  jumlah_pengguna_hak_pilih: number | null,
  jumlah_suara_sah: number | null,
  jumlah_suara_tidak_sah: number | null
) => {
  await store.submit(isEdit, createParams(id, name, period, type, province, regency, district, village, tps, jumlah_total_dpt, jumlah_pengguna_hak_pilih, jumlah_suara_sah, jumlah_suara_tidak_sah));
};

const createParams = (id: number, name: string, period: number, type: number, province: number, regency: number, district: number, village: number, tps: number, jumlah_total_dpt: number, jumlah_pengguna_hak_pilih: number, jumlah_suara_sah: number, jumlah_suara_tidak_sah: number): RequestDapilEntity => {
  let result: RequestDapilEntity = {
    id: id,
    name: name,
    period: period,
    type: type,
    province: province,
    regency: regency,
    district: district,
    village: village,
    tps: tps,
    jumlah_total_dpt: jumlah_total_dpt,
    jumlah_pengguna_hak_pilih: jumlah_pengguna_hak_pilih,
    jumlah_suara_sah: jumlah_suara_sah,
    jumlah_suara_tidak_sah: jumlah_suara_tidak_sah
  };
  return result;
};

export { submitDapilUseCase };
