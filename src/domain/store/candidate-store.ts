import {
  CandidateEntity,
  RequestCandidateEntity,
} from "../entity/candidate-entity";
import { ResponseEntity } from "../entity/response-entity";
import { BaseStore } from "./base-store";

interface CandidateStore extends BaseStore {
  candidates: [CandidateEntity];
  candidate: CandidateEntity;
  contentDownload: any;
  contentPhoto: any;

  // Actions
  getCandidates(name?: string): Promise<ResponseEntity<[CandidateEntity]>>;

  getCandidateByParty(
    partyId: string,
    candidateName: string
  ): Promise<ResponseEntity<[CandidateEntity]>>;

  getCandidateById(id: string): Promise<ResponseEntity<CandidateEntity>>;

  submit(
    isEdit: boolean,
    request: RequestCandidateEntity
  ): Promise<ResponseEntity<CandidateEntity>>;

  remove(id: number): Promise<ResponseEntity<CandidateEntity>>;

  downloadCandidate(): Promise<ResponseEntity<any>>;
  uploadPhotoCandidate(
    candidateId: number,
    image: string
  ): Promise<ResponseEntity<any>>;
}

export type { CandidateStore };
