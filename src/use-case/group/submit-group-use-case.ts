import { GroupEntity, RequestGroupEntity } from "src/domain/entity/group-entity";
import { MenuEntity } from "src/domain/entity/menu-entity";
import { GroupStore } from "src/domain/store/group-store";

const submitGroupUseCase = async (
  store: GroupStore,
  isEdit: boolean,
  id: number| null,
  name: string | "",
  menus: Array<MenuEntity>
) => {
  await store.submit(isEdit, createParams(id, name, menus));
};

const createParams = (id: number, name: string, menus: Array<MenuEntity>): RequestGroupEntity => {
  let result: RequestGroupEntity = {
    id: id,
    name: name,
    menus: menus
  };
  return result;
};

export { submitGroupUseCase };
