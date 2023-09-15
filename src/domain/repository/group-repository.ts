import { GroupService } from "src/data/service/group-service";
import { mapResponse } from "src/helpers/map-response";
import { GroupEntity, RequestGroupEntity } from "../entity/group-entity";
import { ResponseEntity } from "../entity/response-entity";

const getGroups = async (
  name?: string,
): Promise<ResponseEntity<[GroupEntity]>> => {
  return mapResponse(await GroupService.getGroups(name));
};

const getGroupById = async (
  id: number
): Promise<ResponseEntity<GroupEntity>> => {
  return mapResponse(
    await GroupService.getGroupById(id)
  );
};

const submit = async (
  isEdit: boolean,
  request: RequestGroupEntity,
): Promise<ResponseEntity<GroupEntity>> => {
  return mapResponse(await GroupService.submit(isEdit, request));
};

const remove = async (
  id: number
): Promise<ResponseEntity<GroupEntity>> => {
  return mapResponse(await GroupService.remove(id));
};

export const GroupRepository = {
  getGroups,
  getGroupById,
  submit,
  remove
};
