import { PeriodService } from "src/data/service/period-service";
import { mapResponse } from "src/helpers/map-response";
import { PeriodEntity } from "../entity/period-entity";
import { ResponseEntity } from "../entity/response-entity";

const getPeriods = async (
  name?: string,
): Promise<ResponseEntity<[PeriodEntity]>> => {
  return mapResponse(await PeriodService.getPeriods(name));
};

const getPeriodById = async (
  id: number
): Promise<ResponseEntity<PeriodEntity>> => {
  return mapResponse(
    await PeriodService.getPeriodById(id)
  );
};

export const PeriodRepository = {
  getPeriods,
  getPeriodById
};
