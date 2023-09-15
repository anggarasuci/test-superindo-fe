import getConfig from "next/config";
import { fetchWrapper } from "../../helpers/fetch-wrapper";
import { Endpoint } from "src/helpers/constant/endpoint";
import { CandidateDocumentActionType } from "../action-type/candidate-document-action-type";
import { RequestCandidateDocumentEntity } from "src/domain/entity/candidate-document-entity";

const { publicRuntimeConfig } = getConfig();
const baseUrl = `${publicRuntimeConfig.apiUrl}${Endpoint.candidateDocument}`;

const getByCandidate = async (candidateId: number) => {
  return fetchWrapper.get(
    CandidateDocumentActionType.GET_CANDIDATES_DOCUMENT,
    `${baseUrl}?candidate=${candidateId ?? ""}`
  );
};

const uploadDocument = async (
  requestEntity: RequestCandidateDocumentEntity
) => {
  const formData = new FormData();
  formData.append("file", requestEntity?.file, requestEntity?.file?.name);
  formData.append("candidate", requestEntity?.candidate?.toString());
  formData.append("document_type", requestEntity?.document_type?.toString());
  formData.append("complete", requestEntity?.complete?.toString());

  const response = await fetchWrapper.postWithAttachFile(
    CandidateDocumentActionType.SUBMIT_CANDIDATE_DOCUMENT,
    `${baseUrl}`,
    formData
  );
  return response;
};

const remove = async (id: number) => {
  return fetchWrapper.delete(
    CandidateDocumentActionType.REMOVE_CANDIDATE_DOCUMENT,
    `${baseUrl}${id}/`
  );
};

export const CandidateDocumentService = {
  getByCandidate,
  uploadDocument,
  remove,
};
