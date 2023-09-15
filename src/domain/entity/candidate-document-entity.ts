import { CandidateEntity } from "./candidate-entity";
import { DocumentTypeEntity } from "./document-type-entity";

export interface CandidateDocumentEntity {
  id: number;
  candidate: CandidateEntity;
  document_type: DocumentTypeEntity;
  file: string;
  complete: boolean;
}

export interface RequestCandidateDocumentEntity {
  //id: number;
  candidate: number;
  document_type: number;
  file: any;
  complete: boolean;
}

export interface BaseCandidateDocumentEntity {
  id: number;
  documentTypeId: number;
  file: any;
}
