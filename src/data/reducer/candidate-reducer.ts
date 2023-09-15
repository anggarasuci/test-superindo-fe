import type { AnyAction } from "redux";
import { CandidateStore } from "src/domain/store/candidate-store";
import { MapStateReducers } from "src/helpers/map-state-reducers";
import { CandidateActionType } from "../action-type/candidate-action-type";

type CandidateStoreState = Omit<
  CandidateStore,
  | "getCandidates"
  | "getCandidateById"
  | "submit"
  | "remove"
  | "getCandidateByParty"
  | "downloadCandidate"
  | "uploadPhotoCandidate"
>;

const INITIAL_STATE: CandidateStoreState = {
  candidates: undefined,
  candidate: undefined,
  contentDownload: undefined,
  contentPhoto: undefined,
  validation: undefined,
  status: undefined,
};

const candidateReducer = (
  state: CandidateStoreState = INITIAL_STATE,
  action: AnyAction
) => {
  if (action.payload?.status?.isError)
    return {
      ...state,
      status: action.payload?.status,
      validation: action.payload?.validation ?? [],
    };

  switch (action.type) {
    case CandidateActionType.GET_CANDIDATES:
      return {
        ...state,
        candidates: action.payload.data ?? [],
        status: action?.payload?.status,
        validation: action?.payload?.validation ?? [],
      };
    case CandidateActionType.GET_CANDIDATE_BY_ID:
      return {
        ...state,
        candidate: action.payload.data ?? {},
        status: action?.payload?.status,
        validation: action?.payload?.validation ?? [],
      };
    case CandidateActionType.SUBMIT_CANDIDATE:
      return {
        ...state,
        status: action.payload?.status,
        validation: action.payload?.validation ?? [],
      };
    case CandidateActionType.UPDATE_CANDIDATE:
      return {
        ...state,
        status: action.payload?.status,
        validation: action.payload?.validation ?? [],
      };
    case CandidateActionType.REMOVE_CANDIDATE:
      return {
        ...state,
        candidates: MapStateReducers.removeItemStateList(
          state?.candidates,
          action.payload
        ),
      };
    case CandidateActionType.DOWNLOAD_CANDIDATE:
      return {
        ...state,
        contentDownload: action.payload ?? action.payload?.data ?? {},
        status: action?.payload?.status,
        validation: action?.payload?.validation ?? [],
      };
    case CandidateActionType.UPLOAD_PHOTO_CANDIDATE:
      return {
        ...state,
        contentPhoto: action.payload ?? action.payload?.data ?? {},
        status: action?.payload?.status,
        validation: action?.payload?.validation ?? [],
      };
    default:
      return state;
  }
};

export { candidateReducer };
export type { CandidateStoreState };
