import { BaseEntity } from "./base-entity";

export interface PartyEntity {
  id: any;
  counter_no?: number;
  name: string;
  logo?: string,
  color?: string;
  secondary_color?: string;
  short_name?: string;
  text_color?: string;
}

export interface RequestPartyEntity {
    id: number;
    counter_no: number;
    name: string;
    logo: string,
    color: string;
    secondary_color: string;
    short_name: string;
    text_color: string;
}
