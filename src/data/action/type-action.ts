import { TypeRepository } from "src/domain/repository/type-repository";
import { TypeActionType } from "../action-type/type-action-type";
import { SettingActionType } from "../action-type/setting-action-type";

const getTypeAction =
  (name?: string) => async (dispatch: any) => {
    dispatch({ type: SettingActionType.SET_LOADING, isLoading: true });
    const response = await TypeRepository.getTypes(
      name
    );
    dispatch({
      type: TypeActionType.GET_TYPES,
      payload: response,
    });
    dispatch({ type: SettingActionType.SET_LOADING, isLoading: false });
    return response;
  };

export const TypeAction = { getTypeAction };
