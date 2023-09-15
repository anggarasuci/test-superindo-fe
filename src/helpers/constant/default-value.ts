import {
  ResponseEntity,
  ResponseStatusEntity,
} from "src/domain/entity/response-entity";
import { ResponseStatus } from "./response-status";

const Location = {
  Province: "province",
  District: "district",
  Village: "village",
  Regency: "regency",
  TPS: "tps",
};

const LocationDisplay = {
  Province: "Provinsi",
  District: "Kabupaten / Kota",
  Village: "Kecamatan",
  Regency: "Desa / Kelurahan",
  TPS: "tps",
};

const Params = {
  search: "search",
  locations: [
    Location.Province,
    Location.Regency,
    Location.District,
    Location.Village,
    Location.TPS,
  ], // set position by hierarchy
};

const EmptyResponseStatus: ResponseStatusEntity = {
  isError: false,
  code: 0,
  message: "",
};

const EmptyResponse: ResponseEntity<any> = {
  validation: [],
  status: EmptyResponseStatus,
  data: undefined,
};

const Value = {
  maxLimit: "99999999",
  maxRowUpload: 5001
};

export const DefaultValue = {
  Location,
  Params,
  EmptyResponse,
  EmptyResponseStatus,
  LocationDisplay,
  Value,
};
