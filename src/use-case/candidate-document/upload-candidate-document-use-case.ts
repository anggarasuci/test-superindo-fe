import { RequestCandidateDocumentEntity } from "src/domain/entity/candidate-document-entity";
import { CandidateDocumentStore } from "src/domain/store/candidate-document-store";

const uploadCandidateDocumentUseCase = async (
  store: CandidateDocumentStore,
  candidate: number,
  file: any,
  documentType: number
) => {
  let param = createParams(candidate, file, documentType);
  await store.upload(param);
};

const createParams = (
  candidate: number,
  file: any,
  documentType: number
): RequestCandidateDocumentEntity => {
  let result: RequestCandidateDocumentEntity = {
    //id: 0,
    candidate: candidate,
    document_type: documentType,
    file: file,
    complete: true,
  };
  return result;
};

export { uploadCandidateDocumentUseCase };
