import { MenuService } from "src/data/service/menu-service";
import { mapResponse } from "src/helpers/map-response";
import { MenuEntity, RequestMenuEntity } from "../entity/menu-entity";
import { ResponseEntity } from "../entity/response-entity";

const getMenus = async (
  name?: string,
): Promise<ResponseEntity<[MenuEntity]>> => {
  return mapResponse(await MenuService.getMenus(name));
};

const getMenuById = async (
  id: number
): Promise<ResponseEntity<MenuEntity>> => {
  return mapResponse(
    await MenuService.getMenuById(id)
  );
};

const submit = async (
  isEdit: boolean,
  request: RequestMenuEntity,
): Promise<ResponseEntity<MenuEntity>> => {
  return mapResponse(await MenuService.submit(isEdit, request));
};

const remove = async (
  id: number
): Promise<ResponseEntity<MenuEntity>> => {
  return mapResponse(await MenuService.remove(id));
};

export const MenuRepository = {
  getMenus,
  getMenuById,
  submit,
  remove
};
