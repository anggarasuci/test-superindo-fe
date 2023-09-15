import { TypeService } from "src/data/service/type-service";
import { mapResponse } from "src/helpers/map-response";
import { TypeEntity } from "../entity/type-entity";
import { ResponseEntity } from "../entity/response-entity";

const getTypes = async (
  name?: string,
): Promise<ResponseEntity<[TypeEntity]>> => {
  return mapResponse(await TypeService.getTypes(name));
};

const getTypeById = async (
  id: number
): Promise<ResponseEntity<TypeEntity>> => {
  return mapResponse(
    await TypeService.getTypeById(id)
  );
};

export const TypeRepository = {
  getTypes,
  getTypeById
};
