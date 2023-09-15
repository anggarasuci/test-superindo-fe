import { GroupEntity } from "./group-entity";

export interface UserEntity {
  id: number;
  username: string;
  email: string;
  is_staff: boolean;
  is_superuser: boolean;
  is_active: boolean;
  last_login: string;
  groups: Array<GroupEntity>
}

export interface RequestUserEntity {
  id: number;
  username: string;
  email: string;
  is_staff: boolean;
  is_superuser: boolean;
  is_active: boolean;
  password: string;
  groups: Array<GroupEntity>
}
