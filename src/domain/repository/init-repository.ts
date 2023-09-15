import { AuthService } from "src/data/service/auth-service";
import { InitService } from "src/data/service/init-service";
import { mapResponse } from "src/helpers/map-response";
import { AuthEntity } from "../entity/auth-entity";
import { LoginEntity } from "../entity/login-entity";
import { PeriodEntity } from "../entity/period-entity";
import { ResponseEntity } from "../entity/response-entity";
import { TypeEntity } from "../entity/type-entity";
import { UserEntity } from "../entity/user-entity";

const initPeriods = async (
    name?: string
): Promise<ResponseEntity<[PeriodEntity]>> => {
    return mapResponse(await InitService.initPeriods(name));
};

const initTypes = async (
    name?: string
): Promise<ResponseEntity<[TypeEntity]>> => {
    return mapResponse(await InitService.initTypes(name));
};

const initUser = async (
    name?: string
): Promise<ResponseEntity<UserEntity>> => {
    return mapResponse(await InitService.initUser(name));
};

const setPeriodId = async (
    id: number
): Promise<ResponseEntity<number>> => {
    return mapResponse(await InitService.setPeriodId(id));
}

const setTypeId = async (
    id: number
): Promise<ResponseEntity<number>> => {
    return mapResponse(await InitService.setTypeId(id));
}

export const InitRepository = {
  initPeriods,
  initTypes,
  initUser,
  setPeriodId,
  setTypeId
}
