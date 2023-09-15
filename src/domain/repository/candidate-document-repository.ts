import { CandidateDocumentService } from "src/data/service/candidate-document-service";
import { mapResponse } from "src/helpers/map-response";
import {
  CandidateDocumentEntity,
  RequestCandidateDocumentEntity,
} from "../entity/candidate-document-entity";
import { ResponseEntity } from "../entity/response-entity";

const getDocumentByCandidate = async (
  candidateId: number
): Promise<ResponseEntity<CandidateDocumentEntity[]>> => {
  return mapResponse(
    await CandidateDocumentService.getByCandidate(candidateId)
  );
};

const remove = async (
  id: number
): Promise<ResponseEntity<CandidateDocumentEntity>> => {
  return mapResponse(await CandidateDocumentService.remove(id));
};

const uploadDocument = async (
  request: RequestCandidateDocumentEntity
): Promise<ResponseEntity<CandidateDocumentEntity>> => {
  return mapResponse(await CandidateDocumentService.uploadDocument(request));
};

export const CandidateDocumentRepository = {
  getDocumentByCandidate,
  remove,
  uploadDocument,
};
