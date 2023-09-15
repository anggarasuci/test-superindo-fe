import { OrganizationService } from "src/data/service/candidate-organization-service";
import { mapResponse } from "src/helpers/map-response";
import {
  OrganizationEntity,
  RequestOrganizationEntity,
} from "../entity/candidate-organization-entity";
import { ResponseEntity } from "../entity/response-entity";

const getOrganization = async (
  name?: string
): Promise<ResponseEntity<[OrganizationEntity]>> => {
  return mapResponse(await OrganizationService.getOrganization(name));
};

const getOrganizationById = async (
  id: string
): Promise<ResponseEntity<OrganizationEntity>> => {
  return mapResponse(await OrganizationService.getOrganizationById(id));
};

const submit = async (
  isEdit: boolean,
  request: RequestOrganizationEntity
): Promise<ResponseEntity<OrganizationEntity>> => {
  return mapResponse(await OrganizationService.submit(isEdit, request));
};

const remove = async (
  id: number
): Promise<ResponseEntity<OrganizationEntity>> => {
  return mapResponse(await OrganizationService.remove(id));
};

export const OrganizationRepository = {
  getOrganization,
  getOrganizationById,
  submit,
  remove,
};
