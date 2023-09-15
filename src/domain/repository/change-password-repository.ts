import { ChangePasswordService } from "src/data/service/change-password-service";
import { mapResponse } from "src/helpers/map-response";
import { ChangePasswordEntity } from "../entity/change-password-entity";
import { ResponseEntity } from "../entity/response-entity";

const changePassword = async (
  changePasswordEntity: ChangePasswordEntity
): Promise<ResponseEntity<ChangePasswordEntity>> => {
  return mapResponse(await ChangePasswordService.changePassword(changePasswordEntity));
};

export const ChangePasswordRepository = {
  changePassword
}
