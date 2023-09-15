import { RequestScoreTypeEntity } from "src/domain/entity/score-type-entity";
import { ScoreTypeRepository } from "src/domain/repository/score-type-repository";
import { ScoreTypeActionType } from "../action-type/score-type-action-type";
import { SettingActionType } from "../action-type/setting-action-type";

const getScoreTypesAction = (name?: string) => async (dispatch: any) => {
  dispatch({ type: SettingActionType.SET_LOADING, isLoading: true });
  const response = await ScoreTypeRepository.getScoreTypes(name);
  dispatch({
    type: ScoreTypeActionType.GET_SCORE_TYPES,
    payload: response,
  });
  dispatch({ type: SettingActionType.SET_LOADING, isLoading: false });
  return response;
};

const getScoreTypeByIdAction = (id: number) => async (dispatch: any) => {
  dispatch({ type: SettingActionType.SET_LOADING, isLoading: true });
  const response = await ScoreTypeRepository.getScoreTypeById(id);
  dispatch({
    type: ScoreTypeActionType.GET_SCORE_TYPE_ID,
    payload: response,
  });
  dispatch({ type: SettingActionType.SET_LOADING, isLoading: false });
  return response;
};

const submitAction =
  (isEdit: boolean, request: RequestScoreTypeEntity) =>
  async (dispatch: any) => {
    const actionType = isEdit
      ? ScoreTypeActionType.UPDATE_SCORE_TYPE
      : ScoreTypeActionType.SUBMIT_SCORE_TYPE;

    dispatch({ type: SettingActionType.SET_LOADING, isLoading: true });
    const response = await ScoreTypeRepository.submit(isEdit, request);
    dispatch({
      type: actionType,
      payload: response,
    });
    dispatch({ type: SettingActionType.SET_LOADING, isLoading: false });
    return response;
  };

const removeAction = (id: number) => async (dispatch: any) => {
  dispatch({ type: SettingActionType.SET_LOADING, isLoading: true });
  const response = await ScoreTypeRepository.remove(id);
  dispatch({
    type: ScoreTypeActionType.REMOVE_SCORE_TYPE,
    payload: id,
  });
  dispatch({ type: SettingActionType.SET_LOADING, isLoading: false });
  return response;
};

export const ScoreTypeAction = {
  getScoreTypesAction,
  getScoreTypeByIdAction,
  submitAction,
  removeAction,
};
