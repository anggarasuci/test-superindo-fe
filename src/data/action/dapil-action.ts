import { RequestDapilEntity } from "src/domain/entity/dapil-entity";
import { DapilRepository } from "src/domain/repository/dapil-repository";
import { DapilActionType } from "../action-type/dapil-action-type";
import { SettingActionType } from "../action-type/setting-action-type";

const getDapilAction =
  (name?: string, province?: string, type?: string, period?: string) =>
  async (dispatch: any) => {
    dispatch({ type: SettingActionType.SET_LOADING, isLoading: true });
    const response = await DapilRepository.getDapils(name, province, type, period);
    dispatch({
      type: DapilActionType.GET_DAPILS,
      payload: response,
    });
    dispatch({ type: SettingActionType.SET_LOADING, isLoading: false });
    return response;
  };

const getDapilByIdAction = (id?: string) => async (dispatch: any) => {
  dispatch({ type: SettingActionType.SET_LOADING, isLoading: true });
  const response = await DapilRepository.getDapilById(id);
  dispatch({
    type: DapilActionType.GET_DAPIL_BY_ID,
    payload: response,
  });
  dispatch({ type: SettingActionType.SET_LOADING, isLoading: false });
  return response;
};

const submitAction =
  (isEdit: boolean, request: RequestDapilEntity) => async (dispatch: any) => {
    const actionType = isEdit
      ? DapilActionType.UPDATE_DAPIL
      : DapilActionType.SUBMIT_DAPIL;

    dispatch({ type: SettingActionType.SET_LOADING, isLoading: true });
    const response = await DapilRepository.submit(isEdit, request);
    dispatch({
      type: actionType,
      payload: response,
    });
    dispatch({ type: SettingActionType.SET_LOADING, isLoading: false });
    return response;
  };

const removeAction = (id: number) => async (dispatch: any) => {
  dispatch({ type: SettingActionType.SET_LOADING, isLoading: true });
  const response = await DapilRepository.remove(id);
  dispatch({
    type: DapilActionType.REMOVE_DAPIL,
    payload: id,
  });
  dispatch({ type: SettingActionType.SET_LOADING, isLoading: false });
  return response;
};

export const DapilAction = {
  getDapilAction,
  getDapilByIdAction,
  submitAction,
  removeAction,
};
