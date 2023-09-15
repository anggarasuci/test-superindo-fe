import { ResultWinnerRepository } from "src/domain/repository/result-winner-repository";
import { ResultWinnerActionType } from "../action-type/result-winner-action-type";
import { SettingActionType } from "../action-type/setting-action-type";

const getResultWinnerAction =
  (
    dapil?: string,
    includeProvince?: boolean,
    province?: string,
    party?: string,
    period?: string,
    type?: string
  ) =>
  async (dispatch: any) => {
    dispatch({ type: SettingActionType.SET_LOADING, isLoading: true });
    const response = await ResultWinnerRepository.getResultWinner(
      dapil,
      includeProvince,
      province,
      party,
      period,
      type
    );
    dispatch({
      type: ResultWinnerActionType.GET_RESULT_WINNER,
      payload: response,
    });
    dispatch({ type: SettingActionType.SET_LOADING, isLoading: false });
    return response;
  };

export const ResultWinnerAction = { getResultWinnerAction };
