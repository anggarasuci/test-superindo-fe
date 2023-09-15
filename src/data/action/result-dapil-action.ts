import { ResultDapilRepository } from "src/domain/repository/result-dapil-repository";
import { ResultDapilActionType } from "../action-type/result-dapil-action-type";
import { SettingActionType } from "../action-type/setting-action-type";

const getResultPartyAction =
  (dapil?: string, period?: string, type?: string) => async (dispatch: any) => {
    dispatch({ type: SettingActionType.SET_LOADING, isLoading: true });
    const response = await ResultDapilRepository.getResultParty(
      dapil,
      period,
      type
    );
    dispatch({
      type: ResultDapilActionType.GET_RESULT_DAPIL_PARTY,
      payload: response,
    });
    dispatch({ type: SettingActionType.SET_LOADING, isLoading: false });
    return response;
  };

const getResultCandidateAction =
  (
    dapil?: string,
    period?: string,
    type?: string,
    province?: string,
    party?: string,
    start?: string,
    end?: string
  ) =>
  async (dispatch: any) => {
    dispatch({ type: SettingActionType.SET_LOADING, isLoading: true });
    const response = await ResultDapilRepository.getResultCandidate(
      dapil,
      period,
      type,
      province,
      party,
      start,
      end
    );
    dispatch({
      type: ResultDapilActionType.GET_RESULT_DAPIL_CANDIDATE,
      payload: response,
    });
    dispatch({ type: SettingActionType.SET_LOADING, isLoading: false });
    return response;
  };

const getResultPerCandidateAction =
  (candidate?: string, period?: string, type?: string) =>
  async (dispatch: any) => {
    dispatch({ type: SettingActionType.SET_LOADING, isLoading: true });
    const response = await ResultDapilRepository.getResultPerCandidate(
      candidate,
      period,
      type
    );
    dispatch({
      type: ResultDapilActionType.GET_RESULT_DAPIL_PER_CANDIDATE,
      payload: response,
    });
    dispatch({ type: SettingActionType.SET_LOADING, isLoading: false });
    return response;
  };

const getResultRegionAction =
  (
    candidate: string,
    period: string,
    type: string,
    province: string,
    regency: string
  ) =>
  async (dispatch: any) => {
    dispatch({ type: SettingActionType.SET_LOADING, isLoading: true });
    const response = await ResultDapilRepository.getResultRegion(
      candidate,
      period,
      type,
      province,
      regency
    );
    dispatch({
      type: ResultDapilActionType.GET_RESULT_DAPIL_REGION,
      payload: response,
    });
    dispatch({ type: SettingActionType.SET_LOADING, isLoading: false });
    return response;
  };

const getResultScoreAction =
  (dapil: string, period: string, type: string, party: string) =>
  async (dispatch: any) => {
    dispatch({ type: SettingActionType.SET_LOADING, isLoading: true });
    const response = await ResultDapilRepository.getResultScore(
      dapil,
      period,
      type,
      party
    );
    dispatch({
      type: ResultDapilActionType.GET_RESULT_DAPIL_SCORE,
      payload: response,
    });
    dispatch({ type: SettingActionType.SET_LOADING, isLoading: false });
    return response;
  };

const getResultCandidateScoreAction =
  (
    candidate: string,
    dapil: string,
    period: string,
    type: string,
    province: string,
    party: string
  ) =>
  async (dispatch: any) => {
    dispatch({ type: SettingActionType.SET_LOADING, isLoading: true });
    const response = await ResultDapilRepository.getResultCandidateScore(
      candidate,
      dapil,
      period,
      type,
      province,
      party
    );
    dispatch({
      type: ResultDapilActionType.GET_RESULT_CANDIDATE_SCORE,
      payload: response,
    });
    dispatch({ type: SettingActionType.SET_LOADING, isLoading: false });
    return response;
  };

const getDashboardAction =
  (period: string, type: string) => async (dispatch: any) => {
    dispatch({ type: SettingActionType.SET_LOADING, isLoading: true });
    const response = await ResultDapilRepository.getDashboard(period, type);
    dispatch({
      type: ResultDapilActionType.GET_DASHBOARD,
      payload: response,
    });
    dispatch({ type: SettingActionType.SET_LOADING, isLoading: false });
    return response;
  };

const removeResultCandidateScoreAction =
  (id: number) => async (dispatch: any) => {
    dispatch({ type: SettingActionType.SET_LOADING, isLoading: true });
    const response = await ResultDapilRepository.removeResultCandidateScore(id);
    dispatch({
      type: ResultDapilActionType.REMOVE_CANDIDATE_SCORE,
      payload: response,
    });
    dispatch({ type: SettingActionType.SET_LOADING, isLoading: false });
    return response;
  };

export const ResultDapilAction = {
  getResultPartyAction,
  getResultCandidateAction,
  getResultPerCandidateAction,
  getResultRegionAction,
  getResultScoreAction,
  getResultCandidateScoreAction,
  getDashboardAction,
  removeResultCandidateScoreAction,
};
