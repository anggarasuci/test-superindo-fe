import { MenuEntity } from "./menu-entity";

export interface GroupEntity {
  id: number;
  name: string;
  menus: Array<MenuEntity>
}

export interface RequestGroupEntity {
    id: number;
    name: string;
    menus: Array<MenuEntity>
}
