export interface BaseEntity {
  id: string;
  name: string;
}

export interface LabelEntity extends BaseEntity {
  isChecked: boolean | false;
}

export interface SortEntity extends BaseEntity {
  orderBy?: "asc" | "desc";
}
