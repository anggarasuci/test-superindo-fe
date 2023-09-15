import getConfig from "next/config";
import { fetchWrapper } from "../../helpers/fetch-wrapper";
import { RequestCandidateEntity } from "src/domain/entity/candidate-entity";
import { Endpoint } from "src/helpers/constant/endpoint";
import { CandidateActionType } from "../action-type/candidate-action-type";
import { DefaultValue } from "src/helpers/constant/default-value";

const { publicRuntimeConfig } = getConfig();
const baseUrl = `${publicRuntimeConfig.apiUrl}${Endpoint.candidates}`;

const getCandidates = async (name?: string) => {
  return fetchWrapper.get(
    CandidateActionType.GET_CANDIDATES,
    `${baseUrl}?search=${name ?? ""}`
  );
};

const getCandidateByParty = async (partyId: string, candidateName: string) => {
  return fetchWrapper.get(
    CandidateActionType.GET_CANDIDATES,
    `${baseUrl}?party=${partyId}&limit=${DefaultValue.Value.maxLimit}&search=${candidateName}`
  );
};

const getCandidateById = async (id: string) => {
  return fetchWrapper.get(
    CandidateActionType.GET_CANDIDATE_BY_ID,
    `${baseUrl}${id}/`
  );
};

const submit = async (isEdit: boolean, request: RequestCandidateEntity) => {
  return isEdit
    ? fetchWrapper.put(
        CandidateActionType.UPDATE_CANDIDATE,
        `${baseUrl}${request.id}/`,
        request
      )
    : fetchWrapper.post(
        CandidateActionType.SUBMIT_CANDIDATE,
        `${baseUrl}`,
        request
      );
};

const remove = async (id: number) => {
  return fetchWrapper.delete(
    CandidateActionType.REMOVE_CANDIDATE,
    `${baseUrl}${id}/`
  );
};

const downloadCandidate = async () => {
  fetchWrapper.download(
    CandidateActionType.DOWNLOAD_CANDIDATE,
    `${publicRuntimeConfig.apiUrl}${Endpoint.downloadCandidate}`,
    "caleg-data"
  );
};

const uploadPhotoCandidate = async (candidateId: number, image: string) => {
  fetchWrapper.put(
    CandidateActionType.UPLOAD_PHOTO_CANDIDATE,
    `${publicRuntimeConfig.apiUrl}${Endpoint.photo}${candidateId}/`,
    { photo: image }
  );
};

export const CandidateService = {
  getCandidates,
  getCandidateById,
  getCandidateByParty,
  submit,
  remove,
  downloadCandidate,
  uploadPhotoCandidate,
};
