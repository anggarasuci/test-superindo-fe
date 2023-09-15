import getConfig from "next/config";
import { fetchWrapper } from "../../helpers/fetch-wrapper";
import { Endpoint } from "src/helpers/constant/endpoint";
import { CandidateExperienceActionType } from "../action-type/candidate-experience-action-type";
import { RequestExperienceEntity } from "src/domain/entity/candidate-experience-entity";

const { publicRuntimeConfig } = getConfig();
const baseUrl = `${publicRuntimeConfig.apiUrl}${Endpoint.candidateExperience}`;

const getExperience = async (name?: string) => {
  return fetchWrapper.get(
    CandidateExperienceActionType.GET_CANDIDATES_EXPERIENCE,
    `${baseUrl}?candidate=${name ?? ""}`
  );
};

const getExperienceById = async (id: string) => {
  return fetchWrapper.get(
    CandidateExperienceActionType.GET_CANDIDATE_EXPERIENCE_BY_ID,
    `${baseUrl}${id}/`
  );
};

const submit = async (isEdit: boolean, request: RequestExperienceEntity) => {
  return isEdit
    ? fetchWrapper.put(
        CandidateExperienceActionType.UPDATE_CANDIDATE_EXPERIENCE,
        `${baseUrl}${request.id}/`,
        request
      )
    : fetchWrapper.post(
        CandidateExperienceActionType.SUBMIT_CANDIDATE_EXPERIENCE,
        `${baseUrl}`,
        request
      );
};

const remove = async (id: number) => {
  return fetchWrapper.delete(
    CandidateExperienceActionType.REMOVE_CANDIDATE_EXPERIENCE,
    `${baseUrl}${id}/`
  );
};

export const ExpereinceService = {
  getExperience,
  getExperienceById,
  submit,
  remove,
};
