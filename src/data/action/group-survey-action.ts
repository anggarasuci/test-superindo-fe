import { RequestGroupSurveyEntity } from "src/domain/entity/group-survey-entity";
import { GroupSurveyRepository } from "src/domain/repository/group-survey-repository";
import { GroupSurveyActionType } from "../action-type/group-survey-action-type";
import { SettingActionType } from "../action-type/setting-action-type";

const getGroupSurveyAction =
  (name?: string) => async (dispatch: any) => {
    dispatch({ type: SettingActionType.SET_LOADING, isLoading: true });
    const response = await GroupSurveyRepository.getGroupSurveys(
      name
    );
    dispatch({
      type: GroupSurveyActionType.GET_GROUP_SURVEYS,
      payload: response,
    });
    dispatch({ type: SettingActionType.SET_LOADING, isLoading: false });
    return response;
  };

const submitAction =
  (isEdit: boolean, request: RequestGroupSurveyEntity) =>
  async (dispatch: any) => {
    const actionType = isEdit
      ? GroupSurveyActionType.UPDATE_GROUP_SURVEY
      : GroupSurveyActionType.SUBMIT_GROUP_SURVEY;

    dispatch({ type: SettingActionType.SET_LOADING, isLoading: true });
    const response = await GroupSurveyRepository.submit(
      isEdit,
      request
    );
    dispatch({
      type: actionType,
      payload: response,
    });
    dispatch({ type: SettingActionType.SET_LOADING, isLoading: false });
    return response;
  };

const removeAction =
  (id: string) => async (dispatch: any) => {
    dispatch({ type: SettingActionType.SET_LOADING, isLoading: true });
    const response = await GroupSurveyRepository.remove(id);
    dispatch({
      type: GroupSurveyActionType.REMOVE_GROUP_SURVEY,
      payload: id,
    });
    dispatch({ type: SettingActionType.SET_LOADING, isLoading: false });
    return response;
  };

export const GroupSurveyAction = { getGroupSurveyAction, submitAction, removeAction };
