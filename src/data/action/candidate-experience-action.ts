import { RequestExperienceEntity } from "src/domain/entity/candidate-experience-entity";
import { ExperinceRepository } from "src/domain/repository/candidate-experience-repository";
import { CandidateExperienceActionType } from "../action-type/candidate-experience-action-type";
import { SettingActionType } from "../action-type/setting-action-type";

const getExperienceAction = (name?: string) => async (dispatch: any) => {
  dispatch({ type: SettingActionType.SET_LOADING, isLoading: true });
  const response = await ExperinceRepository.getExperience(name);
  dispatch({
    type: CandidateExperienceActionType.GET_CANDIDATES_EXPERIENCE,
    payload: response,
  });
  dispatch({ type: SettingActionType.SET_LOADING, isLoading: false });
  return response;
};

const getExperienceByIdAction = (id: string) => async (dispatch: any) => {
  dispatch({ type: SettingActionType.SET_LOADING, isLoading: true });
  const response = await ExperinceRepository.getExperienceById(id);
  dispatch({
    type: CandidateExperienceActionType.GET_CANDIDATE_EXPERIENCE_BY_ID,
    payload: response,
  });
  dispatch({ type: SettingActionType.SET_LOADING, isLoading: false });
  return response;
};

const submitAction =
  (isEdit: boolean, request: RequestExperienceEntity) =>
  async (dispatch: any) => {
    const actionType = isEdit
      ? CandidateExperienceActionType.UPDATE_CANDIDATE_EXPERIENCE
      : CandidateExperienceActionType.SUBMIT_CANDIDATE_EXPERIENCE;

    dispatch({ type: SettingActionType.SET_LOADING, isLoading: true });
    const response = await ExperinceRepository.submit(isEdit, request);
    dispatch({
      type: actionType,
      payload: response,
    });
    dispatch({ type: SettingActionType.SET_LOADING, isLoading: false });
    return response;
  };

const removeAction = (id: number) => async (dispatch: any) => {
  dispatch({ type: SettingActionType.SET_LOADING, isLoading: true });
  const response = await ExperinceRepository.remove(id);
  dispatch({
    type: CandidateExperienceActionType.REMOVE_CANDIDATE_EXPERIENCE,
    payload: id,
  });
  dispatch({ type: SettingActionType.SET_LOADING, isLoading: false });
  return response;
};

export const ExperienceAction = {
  getExperienceAction,
  getExperienceByIdAction,
  submitAction,
  removeAction,
};
