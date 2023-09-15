import { PeriodRepository } from "src/domain/repository/period-repository";
import { PeriodActionType } from "../action-type/period-action-type";
import { SettingActionType } from "../action-type/setting-action-type";

const getPeriodAction =
  (name?: string) => async (dispatch: any) => {
    dispatch({ type: SettingActionType.SET_LOADING, isLoading: true });
    const response = await PeriodRepository.getPeriods(
      name
    );
    dispatch({
      type: PeriodActionType.GET_PERIODS,
      payload: response,
    });
    dispatch({ type: SettingActionType.SET_LOADING, isLoading: false });
    return response;
  };

export const PeriodAction = { getPeriodAction };
