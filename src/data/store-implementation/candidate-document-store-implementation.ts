import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RequestCandidateDocumentEntity } from "src/domain/entity/candidate-document-entity";
import { CandidateDocumentStore } from "src/domain/store/candidate-document-store";
import { CandidateDocumentAction } from "../action/candidate-document-action";
import { CandidateDocumentStoreState } from "../reducer/candidate-document-reducer";
import type { AppRootState } from "./app-store-implementation";

const candidateDocumentSelector = (state: AppRootState) =>
  state.candidateDocument;

const candidateDocumentStoreImplementation = (): CandidateDocumentStore => {
  const { candidateDocuments, validation, status } = useSelector<
    AppRootState,
    CandidateDocumentStoreState
  >(candidateDocumentSelector);
  const dispatch = useDispatch();

  //overidde from store
  const getDocumentByCandidate = useCallback(
    (candidateId: number) =>
      CandidateDocumentAction.getDocumentByCandidate(candidateId)(dispatch),
    [dispatch]
  );

  const upload = useCallback(
    (request: RequestCandidateDocumentEntity) =>
      CandidateDocumentAction.uploadAction(request)(dispatch),
    [dispatch]
  );

  const remove = useCallback(
    (id: number) => CandidateDocumentAction.removeAction(id)(dispatch),
    [dispatch]
  );

  return {
    candidateDocuments,
    validation,
    status,
    getDocumentByCandidate,
    upload,
    remove,
  };
};

export { candidateDocumentStoreImplementation, candidateDocumentSelector };
