import { Utils } from "../utils";

const header = {
  dapil: "Dapil",
  sequence: "Urutan",
  candidate: "Kandidat",
  party: "Partai",
};

const keys = {
  dapil: "dapil",
  sequence: "sequence",
  candidate: "candidate",
  party: "party",
};


const fields = [
  { field: "id", type: "string", headerName: "No", width: 75, },
  {
    field: Utils.getPropertyName(keys, (o: { dapil: any; }) => o.dapil),
    type: "string",
    headerName: header.dapil,
    width: 200,
  },
  {
    field: Utils.getPropertyName(keys, (o: { sequence: any; }) => o.sequence),
    type: "string",
    headerName: header.sequence,
    width: 100,
  },
  {
    field: Utils.getPropertyName(keys, (o: { candidate: any; }) => o.candidate),
    type: "string",
    headerName: header.candidate,
    width: 300,
  },
  {
    field: Utils.getPropertyName(keys, (o: { party: any; }) => o.party),
    type: "string",
    headerName: header.party,
    width: 300,
  },
];

export const UploadWinnerFields = {
  fields,
  keys,
  header
};
