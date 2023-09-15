import {
  OrganizationEntity,
  RequestOrganizationEntity,
} from "../entity/candidate-organization-entity";
import { ResponseEntity } from "../entity/response-entity";
import { BaseStore } from "./base-store";

interface OrganizationStore extends BaseStore {
  organizations: [OrganizationEntity];
  organization: OrganizationEntity;

  // Actions
  getOrganizations(
    name?: string
  ): Promise<ResponseEntity<[OrganizationEntity]>>;

  getOrganizationById(id: string): Promise<ResponseEntity<OrganizationEntity>>;

  submit(
    isEdit: boolean,
    request: RequestOrganizationEntity
  ): Promise<ResponseEntity<OrganizationEntity>>;

  remove(id: number): Promise<ResponseEntity<OrganizationEntity>>;
}

export type { OrganizationStore };
