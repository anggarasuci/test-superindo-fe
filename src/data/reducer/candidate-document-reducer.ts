import type { AnyAction } from "redux";
import { CandidateDocumentStore } from "src/domain/store/candidate-document-store";
import { CandidateDocumentActionType } from "../action-type/candidate-document-action-type";

type CandidateDocumentStoreState = Omit<
  CandidateDocumentStore,
  "getDocumentByCandidate" | "upload" | "remove"
>;

const INITIAL_STATE: CandidateDocumentStoreState = {
  candidateDocuments: [],
  validation: undefined,
  status: undefined,
};

const candidateDocumentReducer = (
  state: CandidateDocumentStoreState = INITIAL_STATE,
  action: AnyAction
) => {
  if (action.payload?.status?.isError)
    return {
      ...state,
      status: action.payload?.status,
      validation: action.payload?.validation ?? [],
    };

  switch (action.type) {
    case CandidateDocumentActionType.GET_CANDIDATES_DOCUMENT:
      return {
        ...state,
        candidateDocuments: action.payload.data ?? [],
        status: action?.payload?.status,
        validation: action?.payload?.validation ?? [],
      };
    case CandidateDocumentActionType.SUBMIT_CANDIDATE_DOCUMENT:
      return {
        ...state,
        status: action.payload?.status,
        validation: action.payload?.validation ?? [],
      };
    case CandidateDocumentActionType.REMOVE_CANDIDATE_DOCUMENT:
      return {
        ...state,
        status: action.payload?.status,
        validation: action.payload?.validation ?? [],
      };
    default:
      return state;
  }
};

export { candidateDocumentReducer };
export type { CandidateDocumentStoreState };
