import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ResultProvinceStore } from "src/domain/store/result-province-store";
import { ResultProvinceAction } from "../action/result-province-action";
import { ResultProvinceStoreState } from "../reducer/result-province-reducer";
import type { AppRootState } from "./app-store-implementation";

const resultProvinceSelector = (state: AppRootState) => state.resultProvince;

const resultProvinceStoreImplementation = (): ResultProvinceStore => {
  const {
    results_province,
    results_province_per_party,
    results_province_candidate,
    results_province_candidate_per_party,
    validation,
    status,
  } = useSelector<AppRootState, ResultProvinceStoreState>(resultProvinceSelector);
  const dispatch = useDispatch();

  //overidde from store
  const getResult = useCallback(
    (province?: string, period?: string, type?: string) =>
      ResultProvinceAction.getResultAction(province, period, type)(dispatch),
    [dispatch]
  );

  const getResultPerParty = useCallback(
    (province?: string, partyId?: string, period?: string, type?: string) =>
      ResultProvinceAction.getResultPerPartyAction(province, partyId, period, type)(dispatch),
    [dispatch]
  );

  const getResultCandidate = useCallback(
    (province?: string, period?: string, type?: string) =>
      ResultProvinceAction.getResultCandidateAction(province, period, type)(dispatch),
    [dispatch]
  );

  const getResultCandidatePerParty = useCallback(
    (province?: string, partyId?: string, period?: string, type?: string) =>
      ResultProvinceAction.getResultCandidatePerPartyAction(province, partyId, period, type)(dispatch),
    [dispatch]
  );

  return {
    results_province,
    results_province_per_party,
    results_province_candidate,
    results_province_candidate_per_party,
    validation,
    status,
    getResult,
    getResultPerParty,
    getResultCandidate,
    getResultCandidatePerParty
  };
};

export { resultProvinceStoreImplementation, resultProvinceSelector };
