import { CandidateService } from "src/data/service/candidate-service";
import { mapResponse } from "src/helpers/map-response";
import {
  CandidateEntity,
  RequestCandidateEntity,
} from "../entity/candidate-entity";
import { ResponseEntity } from "../entity/response-entity";

const getCandidates = async (
  name?: string
): Promise<ResponseEntity<[CandidateEntity]>> => {
  return mapResponse(await CandidateService.getCandidates(name));
};

const getCandidateByParty = async (
  partyId: string,
  candidateName: string
): Promise<ResponseEntity<[CandidateEntity]>> => {
  return mapResponse(
    await CandidateService.getCandidateByParty(partyId, candidateName)
  );
};

const getCandidateById = async (
  id: string
): Promise<ResponseEntity<CandidateEntity>> => {
  return mapResponse(await CandidateService.getCandidateById(id));
};

const submit = async (
  isEdit: boolean,
  request: RequestCandidateEntity
): Promise<ResponseEntity<CandidateEntity>> => {
  return mapResponse(await CandidateService.submit(isEdit, request));
};

const remove = async (id: number): Promise<ResponseEntity<CandidateEntity>> => {
  return mapResponse(await CandidateService.remove(id));
};

const downloadCandidate = async (): Promise<ResponseEntity<any>> => {
  await CandidateService.downloadCandidate();
  return {
    validation: [],
    status: { isError: false, code: 200, message: "" },
    data: {},
  };
};

const uploadPhotoCandidate = async (
  candidateId: number,
  image: string
): Promise<ResponseEntity<any>> => {
  await CandidateService.uploadPhotoCandidate(candidateId, image);
  return {
    validation: [],
    status: { isError: false, code: 200, message: "" },
    data: {},
  };
};

export const CandidateRepository = {
  getCandidates,
  getCandidateById,
  getCandidateByParty,
  submit,
  remove,
  downloadCandidate,
  uploadPhotoCandidate,
};
