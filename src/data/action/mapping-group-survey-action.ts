import { RequestMappingGroupSurveyEntity } from "src/domain/entity/mapping-group-survey-entity";
import { MappingGroupSurveyRepository } from "src/domain/repository/mapping-group-survey-repository";
import { MappingGroupSurveyActionType } from "../action-type/mapping-group-survey-action-type";
import { SettingActionType } from "../action-type/setting-action-type";

const getMappingGroupSurveyAction =
  () => async (dispatch: any) => {
    dispatch({ type: SettingActionType.SET_LOADING, isLoading: true });
    const response = await MappingGroupSurveyRepository.getMappingGroupSurveys();
    dispatch({
      type: MappingGroupSurveyActionType.GET_MAPPING_GROUP_SURVEYS,
      payload: response,
    });
    dispatch({ type: SettingActionType.SET_LOADING, isLoading: false });
    return response;
  };

const getMappingGroupSurveyByIdAction =
  (id: number) => async (dispatch: any) => {
    dispatch({ type: SettingActionType.SET_LOADING, isLoading: true });
    const response = await MappingGroupSurveyRepository.getMappingGroupSurveyById(id);
    dispatch({
      type: MappingGroupSurveyActionType.GET_MAPPING_GROUP_SURVEY_BY_ID,
      payload: response,
    });
    dispatch({ type: SettingActionType.SET_LOADING, isLoading: false });
    return response;
  };

const getMappingGroupSurveyByGroupSurveyIdAction =
  (id: number) => async (dispatch: any) => {
    dispatch({ type: SettingActionType.SET_LOADING, isLoading: true });
    const response = await MappingGroupSurveyRepository.getMappingGroupSurveysByGroupSurveyId(id);
    dispatch({
      type: MappingGroupSurveyActionType.GET_MAPPING_GROUP_SURVEY_BY_GROUP_SURVEY_ID,
      payload: response,
    });
    dispatch({ type: SettingActionType.SET_LOADING, isLoading: false });
    return response;
  };

const submitAction =
  (isEdit: boolean, request: RequestMappingGroupSurveyEntity) =>
  async (dispatch: any) => {
    const actionType = isEdit
      ? MappingGroupSurveyActionType.UPDATE_MAPPING_GROUP_SURVEY
      : MappingGroupSurveyActionType.SUBMIT_MAPPING_GROUP_SURVEY;

    dispatch({ type: SettingActionType.SET_LOADING, isLoading: true });
    const response = await MappingGroupSurveyRepository.submit(
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
  (id: number) => async (dispatch: any) => {
    dispatch({ type: SettingActionType.SET_LOADING, isLoading: true });
    const response = await MappingGroupSurveyRepository.remove(id);
    dispatch({
      type: MappingGroupSurveyActionType.REMOVE_MAPPING_GROUP_SURVEY,
      payload: id,
    });
    dispatch({ type: SettingActionType.SET_LOADING, isLoading: false });
    return response;
  };

export const MappingGroupSurveyAction = { getMappingGroupSurveyAction, getMappingGroupSurveyByIdAction, getMappingGroupSurveyByGroupSurveyIdAction, submitAction, removeAction };
