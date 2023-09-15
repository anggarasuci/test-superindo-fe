import { ResultProvinceRepository } from "src/domain/repository/result-province-repository";
import { ResultProvinceActionType } from "../action-type/result-province-action-type";
import { SettingActionType } from "../action-type/setting-action-type";

const getResultAction =
  (province?: string, period?: string, type?: string) => async (dispatch: any) => {
    dispatch({ type: SettingActionType.SET_LOADING, isLoading: true });
    const response = await ResultProvinceRepository.getResult(
      province, period, type
    );
    dispatch({
      type: ResultProvinceActionType.GET_RESULT_PROVINCE,
      payload: response,
    });
    dispatch({ type: SettingActionType.SET_LOADING, isLoading: false });
    return response;
  };

const getResultPerPartyAction =
  (province?: string, partyId?: string, period?: string, type?: string) => async (dispatch: any) => {
    dispatch({ type: SettingActionType.SET_LOADING, isLoading: true });
    const response = await ResultProvinceRepository.getResultPerParty(
      province, partyId, period, type
    );
    dispatch({
      type: ResultProvinceActionType.GET_RESULT_PROVINCE_PER_PARTY,
      payload: response,
    });
    dispatch({ type: SettingActionType.SET_LOADING, isLoading: false });
    return response;
  };

const getResultCandidateAction =
  (province?: string, period?: string, type?: string) => async (dispatch: any) => {
    dispatch({ type: SettingActionType.SET_LOADING, isLoading: true });
    const response = await ResultProvinceRepository.getResultCandidate(
      province, period, type
    );
    dispatch({
      type: ResultProvinceActionType.GET_RESULT_PROVINCE_CANDIDATE,
      payload: response,
    });
    dispatch({ type: SettingActionType.SET_LOADING, isLoading: false });
    return response;
  };

const getResultCandidatePerPartyAction =
  (province?: string, partyId?: string, period?: string, type?: string) => async (dispatch: any) => {
    dispatch({ type: SettingActionType.SET_LOADING, isLoading: true });
    const response = await ResultProvinceRepository.getResultCandidatePerParty(
      province, partyId, period, type
    );
    dispatch({
      type: ResultProvinceActionType.GET_RESULT_PROVINCE_CANDIDATE_PER_PARTY,
      payload: response,
    });
    dispatch({ type: SettingActionType.SET_LOADING, isLoading: false });
    return response;
  };

export const ResultProvinceAction = { getResultAction, getResultPerPartyAction, getResultCandidateAction, getResultCandidatePerPartyAction };
