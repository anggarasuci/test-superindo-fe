import { MenuEntity, RequestMenuEntity } from "src/domain/entity/menu-entity";
import { MenuStore } from "src/domain/store/menu-store";

const submitMenuUseCase = async (
  store: MenuStore,
  isEdit: boolean,
  id: number | null,
  seq: number| 0,
  name: string | "",
  url: string | "",
  icon: string | "",
  parent: number | null
) => {
  await store.submit(isEdit, createParams(id,seq, name, url, icon, parent));
};

const createParams = (id: number, seq:number, name: string, url: string, icon: string, parent: number): RequestMenuEntity => {
  let result: RequestMenuEntity = {
    id: id,
    seq: seq,
    name: name,
    url: url,
    icon: icon,
    parent: null,
    parent_id: parent
  };
  return result;
};

export { submitMenuUseCase };
