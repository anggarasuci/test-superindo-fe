import { BaseEntity } from "./base-entity";

export interface AuthEntity {
  id: IdEntity;
  username: string;
  password: string;
  isAdmin: boolean;
}

export interface IdEntity {
  timestamp: number;
  machine: number;
  pid: number;
  increment: number;
  creationTime: string;
}
