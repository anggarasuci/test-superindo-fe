export interface MenuEntity {
  id: number;
  seq: number;
  name: string;
  parent: MenuEntity;
  url: string;
  icon: string;
}

export interface RequestMenuEntity {
  id: number;
  seq: number;
  name: string;
  parent: MenuEntity;
  parent_id: number;
  url: string;
  icon: string;
}