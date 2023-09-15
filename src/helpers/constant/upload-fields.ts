import { Utils } from "../utils";

const header = {
  province: "Provinsi",
  regency: "Kabupaten / Kota",
  district: "Kecamatan",
  village: "Desa / Kelurahan",
  tps: "TPS",
  dapil: "Dapil",
  party: "Partai",
  candidate: "Kandidat",
  gender: "Jenis Kelamin",
  result: "Hasil",
  total_dpt: "Total DPT",
  total_pengguna_hak_pilih: "Total Pengguna Hak Pilih",
  total_sah: "Total Sah",
  total_tidak_sah: "Total Tidak Sah",
  total_kursi: "Total Kursi"
};

const keys = {
  province: "province",
  regency: "regency",
  district: "district",
  village: "village",
  tps: "tps",
  dapil: "dapil",
  party: "party",
  candidate: "candidate",
  gender: "gender",
  result: "result",
  total_dpt: "total_dpt",
  total_pengguna_hak_pilih: "total_pengguna_hak_pilih",
  total_sah: "total_sah",
  total_tidak_sah: "total_tidak_sah",
  total_kursi: "total_kursi"
};


const fields = [
  { field: "id", type: "string", headerName: "No", flex: 1 },
  {
    field: Utils.getPropertyName(keys, (o: { province: any; }) => o.province),
    type: "string",
    headerName: header.province,
    width: 200,
  },
  {
    field: Utils.getPropertyName(keys, (o: { regency: any; }) => o.regency),
    type: "string",
    headerName: header.regency,
    width: 200,
  },
  {
    field: Utils.getPropertyName(keys, (o: { district: any; }) => o.district),
    type: "string",
    headerName: header.district,
    width: 150,
  },
  {
    field: Utils.getPropertyName(keys, (o: { village: any; }) => o.village),
    type: "string",
    headerName: header.village,
    width: 150,
  },
  {
    field: Utils.getPropertyName(keys, (o: { tps: any; }) => o.tps),
    type: "string",
    headerName: header.tps,
    width: 150,
  },
  {
    field: Utils.getPropertyName(keys, (o: { dapil: any; }) => o.dapil),
    type: "string",
    headerName: header.dapil,
    width: 120,
  },
  {
    field: Utils.getPropertyName(keys, (o: { party: any; }) => o.party),
    type: "string",
    headerName: header.party,
    width: 250,
  },
  {
    field: Utils.getPropertyName(keys, (o: { candidate: any; }) => o.candidate),
    type: "string",
    headerName: header.candidate,
    width: 250,
  },
  {
    field: Utils.getPropertyName(keys, (o: { gender: any; }) => o.gender),
    type: "string",
    headerName: header.gender,
    width: 100,
  },
  {
    field: Utils.getPropertyName(keys, (o: { result: any; }) => o.result),
    type: "string",
    headerName: header.result,
    width: 150,
  },
  {
    field: Utils.getPropertyName(keys, (o: { total_dpt: any; }) => o.total_dpt),
    type: "string",
    headerName: header.total_dpt,
    width: 150,
  },
  {
    field: Utils.getPropertyName(keys, (o: { total_pengguna_hak_pilih: any; }) => o.total_pengguna_hak_pilih),
    type: "string",
    headerName: header.total_pengguna_hak_pilih,
    width: 150,
  },
  {
    field: Utils.getPropertyName(keys, (o: { total_sah: any; }) => o.total_sah),
    type: "string",
    headerName: header.total_sah,
    width: 150,
  },
  {
    field: Utils.getPropertyName(keys, (o: { total_tidak_sah: any; }) => o.total_tidak_sah),
    type: "string",
    headerName: header.total_tidak_sah,
    width: 150,
  },
  {
    field: Utils.getPropertyName(keys, (o: { total_kursi: any; }) => o.total_kursi),
    type: "string",
    headerName: header.total_kursi,
    width: 150,
  },
];

export const UploadFields = {
  fields,
  keys,
  header
};
