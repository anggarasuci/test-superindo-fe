import { Utils } from "../utils";

const header = {
  party: "Partai",
  candidate: "Nama Caleg",
  gender: "Gender",
  percentage: "Persentase",
  institution: "Lembaga",
  period: "Tanggal",
  type: "Type",
};

const keys = {
  party: "party",
  candidate: "candidate",
  gender: "gender",
  percentage: "percentage",
  institution: "institution",
  period: "period",
  type: "type",
};

const fields = [
  { field: "id", type: "string", headerName: "No", width: 75 },
  {
    field: Utils.getPropertyName(keys, (o: { party: any }) => o.party),
    type: "string",
    headerName: header.party,
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
    field: Utils.getPropertyName(
      keys,
      (o: { percentage: any }) => o.percentage
    ),
    type: "string",
    headerName: header.percentage,
    width: 100,
  },
  {
    field: Utils.getPropertyName(
      keys,
      (o: { institution: any }) => o.institution
    ),
    type: "string",
    headerName: header.institution,
    width: 200,
  },
  {
    field: Utils.getPropertyName(keys, (o: { period: any }) => o.period),
    type: "string",
    headerName: header.period,
    width: 100,
  },
  {
    field: Utils.getPropertyName(keys, (o: { type: any }) => o.type),
    type: "string",
    headerName: header.type,
    width: 75,
  },
];

export const UploadSurveyFields = {
  fields,
  keys,
  header,
};
