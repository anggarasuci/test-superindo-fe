import { RequestOrganizationEntity } from "src/domain/entity/candidate-organization-entity";
import { OrganizationRepository } from "src/domain/repository/candidate-organization-repository";
import { CandidateOrganizationActionType } from "../action-type/candidate-organization-action-type";
import { SettingActionType } from "../action-type/setting-action-type";

const getOrganizationAction = (name?: string) => async (dispatch: any) => {
  dispatch({ type: SettingActionType.SET_LOADING, isLoading: true });
  const response = await OrganizationRepository.getOrganization(name);
  dispatch({
    type: CandidateOrganizationActionType.GET_CANDIDATES_ORGANIZATION,
    payload: response,
  });
  dispatch({ type: SettingActionType.SET_LOADING, isLoading: false });
  return response;
};

const getOrganizationByIdAction = (id: string) => async (dispatch: any) => {
  dispatch({ type: SettingActionType.SET_LOADING, isLoading: true });
  const response = await OrganizationRepository.getOrganizationById(id);
  dispatch({
    type: CandidateOrganizationActionType.GET_CANDIDATE_ORGANIZATION_BY_ID,
    payload: response,
  });
  dispatch({ type: SettingActionType.SET_LOADING, isLoading: false });
  return response;
};

const submitAction =
  (isEdit: boolean, request: RequestOrganizationEntity) =>
  async (dispatch: any) => {
    const actionType = isEdit
      ? CandidateOrganizationActionType.UPDATE_CANDIDATE_ORGANIZATION
      : CandidateOrganizationActionType.SUBMIT_CANDIDATE_ORGANIZATION;

    dispatch({ type: SettingActionType.SET_LOADING, isLoading: true });
    const response = await OrganizationRepository.submit(isEdit, request);
    dispatch({
      type: actionType,
      payload: response,
    });
    dispatch({ type: SettingActionType.SET_LOADING, isLoading: false });
    return response;
  };

const removeAction = (id: number) => async (dispatch: any) => {
  dispatch({ type: SettingActionType.SET_LOADING, isLoading: true });
  const response = await OrganizationRepository.remove(id);
  dispatch({
    type: CandidateOrganizationActionType.REMOVE_CANDIDATE_ORGANIZATION,
    payload: id,
  });
  dispatch({ type: SettingActionType.SET_LOADING, isLoading: false });
  return response;
};

export const OrganizationAction = {
  getOrganizationAction,
  getOrganizationByIdAction,
  submitAction,
  removeAction,
};
