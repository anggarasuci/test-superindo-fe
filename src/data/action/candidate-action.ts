import { RequestCandidateEntity } from "src/domain/entity/candidate-entity";
import { CandidateRepository } from "src/domain/repository/candidate-repository";
import { CandidateActionType } from "../action-type/candidate-action-type";
import { SettingActionType } from "../action-type/setting-action-type";

const getCandidateAction = (name?: string) => async (dispatch: any) => {
  dispatch({ type: SettingActionType.SET_LOADING, isLoading: true });
  const response = await CandidateRepository.getCandidates(name);
  dispatch({
    type: CandidateActionType.GET_CANDIDATES,
    payload: response,
  });
  dispatch({ type: SettingActionType.SET_LOADING, isLoading: false });
  return response;
};

const getCandidateByPartyAction =
  (partyId: string, candidateName: string) => async (dispatch: any) => {
    dispatch({ type: SettingActionType.SET_LOADING, isLoading: true });
    const response = await CandidateRepository.getCandidateByParty(
      partyId,
      candidateName
    );
    dispatch({
      type: CandidateActionType.GET_CANDIDATES,
      payload: response,
    });
    dispatch({ type: SettingActionType.SET_LOADING, isLoading: false });
    return response;
  };

const getCandidateByIdAction = (id: string) => async (dispatch: any) => {
  dispatch({ type: SettingActionType.SET_LOADING, isLoading: true });
  const response = await CandidateRepository.getCandidateById(id);
  dispatch({
    type: CandidateActionType.GET_CANDIDATE_BY_ID,
    payload: response,
  });
  dispatch({ type: SettingActionType.SET_LOADING, isLoading: false });
  return response;
};

const submitAction =
  (isEdit: boolean, request: RequestCandidateEntity) =>
  async (dispatch: any) => {
    const actionType = isEdit
      ? CandidateActionType.UPDATE_CANDIDATE
      : CandidateActionType.SUBMIT_CANDIDATE;

    dispatch({ type: SettingActionType.SET_LOADING, isLoading: true });
    const response = await CandidateRepository.submit(isEdit, request);
    dispatch({
      type: actionType,
      payload: response,
    });
    dispatch({ type: SettingActionType.SET_LOADING, isLoading: false });
    return response;
  };

const removeAction = (id: number) => async (dispatch: any) => {
  dispatch({ type: SettingActionType.SET_LOADING, isLoading: true });
  const response = await CandidateRepository.remove(id);
  dispatch({
    type: CandidateActionType.REMOVE_CANDIDATE,
    payload: id,
  });
  dispatch({ type: SettingActionType.SET_LOADING, isLoading: false });
  return response;
};

const downloadCandidate = () => async (dispatch: any) => {
  dispatch({ type: SettingActionType.SET_LOADING, isLoading: true });
  const response = await CandidateRepository.downloadCandidate();
  dispatch({
    type: CandidateActionType.DOWNLOAD_CANDIDATE,
    payload: response,
  });
  dispatch({ type: SettingActionType.SET_LOADING, isLoading: false });
  return response;
};

const uploadPhotoCandidateAction =
  (candidateId: number, image: string) => async (dispatch: any) => {
    dispatch({ type: SettingActionType.SET_LOADING, isLoading: true });
    const response = await CandidateRepository.uploadPhotoCandidate(
      candidateId,
      image
    );
    dispatch({
      type: CandidateActionType.UPLOAD_PHOTO_CANDIDATE,
      payload: response,
    });
    dispatch({ type: SettingActionType.SET_LOADING, isLoading: false });
    return response;
  };

export const CandidateAction = {
  getCandidateAction,
  getCandidateByIdAction,
  getCandidateByPartyAction,
  submitAction,
  removeAction,
  downloadCandidate,
  uploadPhotoCandidateAction,
};
