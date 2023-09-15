import {
  CandidateDocumentEntity,
  RequestCandidateDocumentEntity,
} from "../entity/candidate-document-entity";
import { ResponseEntity } from "../entity/response-entity";
import { BaseStore } from "./base-store";

interface CandidateDocumentStore extends BaseStore {
  candidateDocuments: CandidateDocumentEntity[];

  // Actions
  getDocumentByCandidate(
    candidateId: number
  ): Promise<ResponseEntity<CandidateDocumentEntity[]>>;

  upload(
    request: RequestCandidateDocumentEntity
  ): Promise<ResponseEntity<CandidateDocumentEntity>>;

  remove(id: number): Promise<ResponseEntity<CandidateDocumentEntity>>;
}

export type { CandidateDocumentStore };
