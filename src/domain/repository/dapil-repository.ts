import { DapilService } from "src/data/service/dapil-service";
import { mapResponse } from "src/helpers/map-response";
import { DapilEntity, RequestDapilEntity } from "../entity/dapil-entity";
import { ResponseEntity } from "../entity/response-entity";

const getDapils = async (
  name?: string,
  province?: string,
  type?: string,
  period?: string
): Promise<ResponseEntity<[DapilEntity]>> => {
  return mapResponse(await DapilService.getDapils(name, province, type, period));
};

const getDapilById = async (
  id: string
): Promise<ResponseEntity<DapilEntity>> => {
  return mapResponse(await DapilService.getDapilById(id));
};

const submit = async (
  isEdit: boolean,
  request: RequestDapilEntity
): Promise<ResponseEntity<DapilEntity>> => {
  return mapResponse(await DapilService.submit(isEdit, request));
};

const remove = async (id: number): Promise<ResponseEntity<DapilEntity>> => {
  return mapResponse(await DapilService.remove(id));
};

export const DapilRepository = {
  getDapils,
  getDapilById,
  submit,
  remove,
};
