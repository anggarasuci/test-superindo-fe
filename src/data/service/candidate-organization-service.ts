import getConfig from "next/config";
import { fetchWrapper } from "../../helpers/fetch-wrapper";
import { Endpoint } from "src/helpers/constant/endpoint";
import { CandidateOrganizationActionType } from "../action-type/candidate-organization-action-type";
import { RequestOrganizationEntity } from "src/domain/entity/candidate-organization-entity";

const { publicRuntimeConfig } = getConfig();
const baseUrl = `${publicRuntimeConfig.apiUrl}${Endpoint.candidateOrganization}`;

const getOrganization = async (name?: string) => {
  return fetchWrapper.get(
    CandidateOrganizationActionType.GET_CANDIDATES_ORGANIZATION,
    `${baseUrl}?candidate=${name ?? ""}`
  );
};

const getOrganizationById = async (id: string) => {
  return fetchWrapper.get(
    CandidateOrganizationActionType.GET_CANDIDATE_ORGANIZATION_BY_ID,
    `${baseUrl}${id}/`
  );
};

const submit = async (isEdit: boolean, request: RequestOrganizationEntity) => {
  return isEdit
    ? fetchWrapper.put(
        CandidateOrganizationActionType.UPDATE_CANDIDATE_ORGANIZATION,
        `${baseUrl}${request.id}/`,
        request
      )
    : fetchWrapper.post(
        CandidateOrganizationActionType.SUBMIT_CANDIDATE_ORGANIZATION,
        `${baseUrl}`,
        request
      );
};

const remove = async (id: number) => {
  return fetchWrapper.delete(
    CandidateOrganizationActionType.REMOVE_CANDIDATE_ORGANIZATION,
    `${baseUrl}${id}/`
  );
};

export const OrganizationService = {
  getOrganization,
  getOrganizationById,
  submit,
  remove,
};
