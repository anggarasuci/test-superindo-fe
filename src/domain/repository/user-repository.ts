import { UserService } from "src/data/service/user-service";
import { mapResponse } from "src/helpers/map-response";
import { UserEntity, RequestUserEntity } from "../entity/user-entity";
import { ResponseEntity } from "../entity/response-entity";

const getUsers = async (
  name?: string,
): Promise<ResponseEntity<[UserEntity]>> => {
  return mapResponse(await UserService.getUsers(name));
};

const getUserById = async (
  id: number
): Promise<ResponseEntity<UserEntity>> => {
  return mapResponse(
    await UserService.getUserById(id)
  );
};

const submit = async (
  isEdit: boolean,
  request: RequestUserEntity,
): Promise<ResponseEntity<UserEntity>> => {
  return mapResponse(await UserService.submit(isEdit, request));
};

const remove = async (
  id: number
): Promise<ResponseEntity<UserEntity>> => {
  return mapResponse(await UserService.remove(id));
};

export const UserRepository = {
  getUsers,
  getUserById,
  submit,
  remove
};
