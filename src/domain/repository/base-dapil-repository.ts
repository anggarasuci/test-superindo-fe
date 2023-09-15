import { BaseDapilService } from "src/data/service/base-dapil-service";
import { mapResponse } from "src/helpers/map-response";
import {
  BaseDapilEntity,
  RequestAdditionalField,
} from "../entity/base-dapil-entity";
import { ResponseEntity } from "../entity/response-entity";

const getBaseDapils = async (
  name?: string
): Promise<ResponseEntity<[BaseDapilEntity]>> => {
  return mapResponse(await BaseDapilService.getBaseDapils(name));
};

const getBaseDapilById = async (
  id: number
): Promise<ResponseEntity<BaseDapilEntity>> => {
  return mapResponse(await BaseDapilService.getBaseDapilById(id));
};

const updateAditionalField = async (
  request: RequestAdditionalField
): Promise<ResponseEntity<any>> => {
  await BaseDapilService.updateAdditionalField(request);
  return {
    validation: [],
    status: { isError: false, code: 200, message: "" },
    data: {},
  };
};

export const BaseDapilRepository = {
  getBaseDapils,
  getBaseDapilById,
  updateAditionalField,
};
