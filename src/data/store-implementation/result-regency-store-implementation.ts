import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ResultRegencyStore } from "src/domain/store/result-regency-store";
import { ResultRegencyAction } from "../action/result-regency-action";
import { ResultRegencyStoreState } from "../reducer/result-regency-reducer";
import type { AppRootState } from "./app-store-implementation";

const resultRegencySelector = (state: AppRootState) => state.resultRegency;

const resultRegencyStoreImplementation = (): ResultRegencyStore => {
  const {
    results_regency,
    results_regency_candidates,
    results_regency_per_candidate,
    results_regency_per_party,
    results_regency_candidate_per_party,
    validation,
    status,
  } = useSelector<AppRootState, ResultRegencyStoreState>(resultRegencySelector);
  const dispatch = useDispatch();

  //overidde from store
  const getResult = useCallback(
    (province?: string, regency?: string, period?: string, type?: string, isTop?: boolean) =>
      ResultRegencyAction.getResultAction(province, regency, period, type, isTop)(dispatch),
    [dispatch]
  );

  const getResultCandidate = useCallback(
    (province?: string, regency?: string, period?: string, type?: string) =>
      ResultRegencyAction.getResultCandidateAction(province, regency, period, type)(dispatch),
    [dispatch]
  );

  const getResultPerCandidate = useCallback(
    (regency?: string, candidate?: string, period?: string, type?: string) =>
      ResultRegencyAction.getResultPerCandidateAction(regency, candidate, period, type)(dispatch),
    [dispatch]
  );

  const getResultPerParty = useCallback(
    (province?: string, regency?: string, partyId?: string, period?: string, type?: string) =>
      ResultRegencyAction.getResultPerPartyAction(province, regency, partyId, period, type)(dispatch),
    [dispatch]
  );

  const getResultCandidatePerParty = useCallback(
    (regency?: string, party?: string, period?: string, type?: string) =>
      ResultRegencyAction.getResultCandidatePerPartyAction(regency, party, period, type)(dispatch),
    [dispatch]
  );

  return {
    results_regency,
    results_regency_candidates,
    results_regency_per_party,
    results_regency_per_candidate,
    results_regency_candidate_per_party,
    validation,
    status,
    getResult,
    getResultCandidate,
    getResultPerParty,
    getResultPerCandidate,
    getResultCandidatePerParty
  };
};

export { resultRegencyStoreImplementation, resultRegencySelector };
