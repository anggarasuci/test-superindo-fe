import { Utils } from "../utils";

const header = {
  dapil: "Dapil",
  candidate: "Nama Caleg",
  gender: "Gender",
  party: "Partai",
  score_type: "Score Type",
  score: "Score",
  notes: "Catatan",
};

const keys = {
  dapil: "dapil",
  candidate: "candidate",
  gender: "gender",
  party: "party",
  score_type: "score_type",
  score: "score",
  notes: "notes",
};

const fields = [
  { field: "id", type: "string", headerName: "No", width: 75 },
  {
    field: Utils.getPropertyName(keys, (o: { dapil: any }) => o.dapil),
    type: "string",
    headerName: header.dapil,
    width: 200,
  },
  {
    field: Utils.getPropertyName(keys, (o: { candidate: any }) => o.candidate),
    type: "string",
    headerName: header.candidate,
    width: 300,
  },
  {
    field: Utils.getPropertyName(keys, (o: { gender: any }) => o.gender),
    type: "string",
    headerName: header.gender,
    width: 100,
  },
  {
    field: Utils.getPropertyName(keys, (o: { party: any }) => o.party),
    type: "string",
    headerName: header.party,
    width: 200,
  },
  {
    field: Utils.getPropertyName(
      keys,
      (o: { score_type: any }) => o.score_type
    ),
    type: "string",
    headerName: header.score_type,
    width: 100,
  },
  {
    field: Utils.getPropertyName(keys, (o: { score: any }) => o.score),
    type: "string",
    headerName: header.score,
    width: 100,
  },
  {
    field: Utils.getPropertyName(keys, (o: { notes: any }) => o.notes),
    type: "string",
    headerName: header.notes,
    width: 350,
  },
];

export const UploadScoreFields = {
  fields,
  keys,
  header,
};
