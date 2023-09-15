import { RequestAdditionalField } from "src/domain/entity/base-dapil-entity";
import { BaseDapilRepository } from "src/domain/repository/base-dapil-repository";
import { BaseDapilActionType } from "../action-type/base-dapil-action-type";
import { SettingActionType } from "../action-type/setting-action-type";

const getBaseDapilAction = (name?: string) => async (dispatch: any) => {
  dispatch({ type: SettingActionType.SET_LOADING, isLoading: true });
  const response = await BaseDapilRepository.getBaseDapils(name);
  dispatch({
    type: BaseDapilActionType.GET_BASEDAPILS,
    payload: response,
  });
  dispatch({ type: SettingActionType.SET_LOADING, isLoading: false });
  return response;
};

const updateAdditionalFieldAction =
  (request: RequestAdditionalField) => async (dispatch: any) => {
    dispatch({ type: SettingActionType.SET_LOADING, isLoading: true });
    const response = await BaseDapilRepository.updateAditionalField(request);
    dispatch({
      type: BaseDapilActionType.UPDATE_ADDITIONAL_FIELD,
      payload: response,
    });
    dispatch({ type: SettingActionType.SET_LOADING, isLoading: false });
    return response;
  };

export const BaseDapilAction = {
  getBaseDapilAction,
  updateAdditionalFieldAction,
};
