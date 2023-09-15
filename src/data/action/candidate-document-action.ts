import { RequestCandidateDocumentEntity } from "src/domain/entity/candidate-document-entity";
import { CandidateDocumentRepository } from "src/domain/repository/candidate-document-repository";
import { CandidateDocumentActionType } from "../action-type/candidate-document-action-type";
import { SettingActionType } from "../action-type/setting-action-type";

const getDocumentByCandidate =
  (candidateId: number) => async (dispatch: any) => {
    dispatch({ type: SettingActionType.SET_LOADING, isLoading: true });
    const response = await CandidateDocumentRepository.getDocumentByCandidate(
      candidateId
    );
    dispatch({
      type: CandidateDocumentActionType.GET_CANDIDATES_DOCUMENT,
      payload: response,
    });
    dispatch({ type: SettingActionType.SET_LOADING, isLoading: false });
    return response;
  };

const uploadAction =
  (request: RequestCandidateDocumentEntity) => async (dispatch: any) => {
    // dispatch({ type: SettingActionType.SET_LOADING, isLoading: true });
    const response = await CandidateDocumentRepository.uploadDocument(request);
    dispatch({
      type: CandidateDocumentActionType.SUBMIT_CANDIDATE_DOCUMENT,
      payload: response,
    });
    // dispatch({ type: SettingActionType.SET_LOADING, isLoading: false });
    return response;
  };

const removeAction = (id: number) => async (dispatch: any) => {
  dispatch({ type: SettingActionType.SET_LOADING, isLoading: true });
  const response = await CandidateDocumentRepository.remove(id);
  dispatch({
    type: CandidateDocumentActionType.REMOVE_CANDIDATE_DOCUMENT,
    payload: id,
  });
  dispatch({ type: SettingActionType.SET_LOADING, isLoading: false });
  return response;
};

export const CandidateDocumentAction = {
  getDocumentByCandidate,
  uploadAction,
  removeAction,
};
