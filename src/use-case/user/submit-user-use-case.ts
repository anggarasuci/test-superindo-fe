import { UserEntity, RequestUserEntity } from "src/domain/entity/user-entity";
import { UserStore } from "src/domain/store/user-store";
import { GroupEntity } from "src/domain/entity/group-entity";

const submitUserUseCase = async (
  store: UserStore,
  isEdit: boolean,
  id: number| null,
  username: string | "",
  email: string | "",
  is_staff: boolean | true,
  is_supersuser: boolean | true,
  is_active: boolean | true,
  password: string | "",
  groups: Array<GroupEntity>
) => {
  await store.submit(isEdit, createParams(id, username, email, is_staff, is_supersuser, is_active, password, groups));
};

const createParams = (
    id: number, 
    username: string, 
    email: string,
    is_staff: boolean,
    is_supersuser: boolean,
    is_active: boolean,
    password: string,
    groups: Array<GroupEntity>): RequestUserEntity => {
  let result: RequestUserEntity = {
    id: id,
    username: username,
    email: email,
    is_staff: is_staff,
    is_superuser: is_supersuser,
    is_active: is_active,
    password: password,
    groups: groups
  };
  return result;
};

export { submitUserUseCase };
