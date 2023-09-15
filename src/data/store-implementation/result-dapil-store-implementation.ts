import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ResultDapilStore } from "src/domain/store/result-dapil-store";
import { ResultDapilAction } from "../action/result-dapil-action";
import { ResultDapilStoreState } from "../reducer/result-dapil-reducer";
import type { AppRootState } from "./app-store-implementation";

const resultDapilSelector = (state: AppRootState) => state.resultDapil;

const resultDapilStoreImplementation = (): ResultDapilStore => {
  const {
    results_dapil_parties,
    results_dapil_candidates,
    results_dapil_candidate,
    resultDapilRegions,
    dashboard,
    resutScores,
    resultCandidateScore,
    validation,
    status,
  } = useSelector<AppRootState, ResultDapilStoreState>(resultDapilSelector);
  const dispatch = useDispatch();

  //overidde from store
  const getResultParty = useCallback(
    (dapil?: string, period?: string, type?: string) =>
      ResultDapilAction.getResultPartyAction(dapil, period, type)(dispatch),
    [dispatch]
  );

  const getResultCandidate = useCallback(
    (
      dapil?: string,
      period?: string,
      type?: string,
      province?: string,
      party?: string,
      start?: string,
      end?: string
    ) =>
      ResultDapilAction.getResultCandidateAction(
        dapil,
        period,
        type,
        province,
        party,
        start,
        end
      )(dispatch),
    [dispatch]
  );

  const getResultDapilPerCandidate = useCallback(
    (candidate?: string, period?: string, type?: string) =>
      ResultDapilAction.getResultPerCandidateAction(
        candidate,
        period,
        type
      )(dispatch),
    [dispatch]
  );

  const getResultRegion = useCallback(
    (
      candidate: string,
      period: string,
      type: string,
      province: string,
      regency: string
    ) =>
      ResultDapilAction.getResultRegionAction(
        candidate,
        period,
        type,
        province,
        regency
      )(dispatch),
    [dispatch]
  );

  const getResultScore = useCallback(
    (dapil: string, period: string, type: string, party: string) =>
      ResultDapilAction.getResultScoreAction(
        dapil,
        period,
        type,
        party
      )(dispatch),
    [dispatch]
  );

  const getResultCandidateScore = useCallback(
    (
      candidate: string,
      dapil: string,
      period: string,
      type: string,
      province: string,
      party: string
    ) =>
      ResultDapilAction.getResultCandidateScoreAction(
        candidate,
        dapil,
        period,
        type,
        province,
        party
      )(dispatch),
    [dispatch]
  );

  const getDashboard = useCallback(
    (period: string, type: string) =>
      ResultDapilAction.getDashboardAction(period, type)(dispatch),
    [dispatch]
  );

  const removeResultCandidateScore = useCallback(
    (id: number) =>
      ResultDapilAction.removeResultCandidateScoreAction(id)(dispatch),
    [dispatch]
  );

  return {
    results_dapil_parties,
    results_dapil_candidates,
    results_dapil_candidate,
    resultDapilRegions,
    resutScores,
    resultCandidateScore,
    validation,
    status,
    dashboard,
    getResultParty,
    getResultCandidate,
    getResultDapilPerCandidate,
    getResultRegion,
    getResultScore,
    getResultCandidateScore,
    getDashboard,
    removeResultCandidateScore,
  };
};

export { resultDapilStoreImplementation, resultDapilSelector };
