import { MenuEntity, RequestMenuEntity } from "../entity/menu-entity";
import { ResponseEntity } from "../entity/response-entity";
import { BaseStore } from "./base-store";

interface MenuStore extends BaseStore {
    menus: [MenuEntity];
    menuById: MenuEntity;
    getMenus(
        name?:string
    ): Promise<ResponseEntity<[MenuEntity]>>;
    submit(isEdit:boolean, request: RequestMenuEntity): Promise<ResponseEntity<MenuEntity>>;
    remove(id: number): Promise<ResponseEntity<MenuEntity>>;
}

export type { MenuStore };