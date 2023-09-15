import { ResultRegencyRepository } from "src/domain/repository/result-regency-repository";
import { ResultRegencyActionType } from "../action-type/result-regency-action-type";
import { SettingActionType } from "../action-type/setting-action-type";

const getResultAction =
  (
    province?: string,
    regency?: string,
    period?: string,
    type?: string,
    isTop?: boolean
  ) =>
  async (dispatch: any) => {
    dispatch({
      type: ResultRegencyActionType.GET_RESULT_REGENCY,
      isLoading: true,
    });
    const response = await ResultRegencyRepository.getResult(
      province,
      regency,
      period,
      type,
      isTop
    );
    dispatch({
      type: ResultRegencyActionType.GET_RESULT_REGENCY,
      payload: response,
    });
    dispatch({
      type: ResultRegencyActionType.GET_RESULT_REGENCY,
      isLoading: false,
    });
    return response;
  };

const getResultPerPartyAction =
  (
    province?: string,
    regency?: string,
    partyId?: string,
    period?: string,
    type?: string
  ) =>
  async (dispatch: any) => {
    dispatch({ type: SettingActionType.SET_LOADING, isLoading: true });
    const response = await ResultRegencyRepository.getResultPerParty(
      province,
      regency,
      partyId,
      period,
      type
    );
    dispatch({
      type: ResultRegencyActionType.GET_RESULT_REGENCY_PER_PARTY,
      payload: response,
    });
    dispatch({ type: SettingActionType.SET_LOADING, isLoading: false });
    return response;
  };

const getResultCandidateAction =
  (province?: string, regency?: string, period?: string, type?: string) =>
  async (dispatch: any) => {
    dispatch({
      type: SettingActionType.SET_LOADING,
      isLoading: true,
    });
    const response = await ResultRegencyRepository.getResultCandidate(
      province,
      regency,
      period,
      type
    );
    dispatch({
      type: ResultRegencyActionType.GET_RESULT_REGENCY_CANDIDATE,
      payload: response,
    });
    dispatch({
      type: SettingActionType.SET_LOADING,
      isLoading: false,
    });
    return response;
  };

const getResultPerCandidateAction =
  (regency?: string, candidate?: string, period?: string, type?: string) =>
  async (dispatch: any) => {
    // dispatch({
    //   type: SettingActionType.SET_LOADING,
    //   isLoading: true,
    // });
    const response = await ResultRegencyRepository.getResultPerCandidate(
      regency,
      candidate,
      period,
      type
    );
    dispatch({
      type: ResultRegencyActionType.GET_RESULT_REGENCY_PER_CANDIDATE,
      payload: response,
    });
    // dispatch({
    //   type: SettingActionType.SET_LOADING,
    //   isLoading: false,
    // });
    return response;
  };

const getResultCandidatePerPartyAction =
  (regency?: string, party?: string, period?: string, type?: string) =>
  async (dispatch: any) => {
    dispatch({
      type: ResultRegencyActionType.GET_RESULT_REGENCY_CANDIDATE_PER_PARTY,
      isLoading: true,
    });
    const response = await ResultRegencyRepository.getResultCandidatePerParty(
      regency,
      party,
      period,
      type
    );
    dispatch({
      type: ResultRegencyActionType.GET_RESULT_REGENCY_CANDIDATE_PER_PARTY,
      payload: response,
    });
    dispatch({
      type: ResultRegencyActionType.GET_RESULT_REGENCY_CANDIDATE_PER_PARTY,
      isLoading: false,
    });
    return response;
  };

export const ResultRegencyAction = {
  getResultAction,
  getResultPerPartyAction,
  getResultCandidateAction,
  getResultPerCandidateAction,
  getResultCandidatePerPartyAction,
};
