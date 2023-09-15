import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ResultWinnerStore } from "src/domain/store/result-winner-store";
import { ResultWinnerAction } from "../action/result-winner-action";
import { ResultWinnerStoreState } from "../reducer/result-winner-reducer";
import type { AppRootState } from "./app-store-implementation";

const resultWinnerSelector = (state: AppRootState) => state.resultWinner;

const resultWinnerStoreImplementation = (): ResultWinnerStore => {
  const { results_winners, validation, status } = useSelector<
    AppRootState,
    ResultWinnerStoreState
  >(resultWinnerSelector);
  const dispatch = useDispatch();

  //overidde from store
  const getResultWinner = useCallback(
    (
      dapil?: string,
      includeProvince?: boolean,
      province?: string,
      party?: string,
      period?: string,
      type?: string
    ) =>
      ResultWinnerAction.getResultWinnerAction(
        dapil,
        includeProvince,
        province,
        party,
        period,
        type
      )(dispatch),
    [dispatch]
  );

  return {
    results_winners,
    validation,
    status,
    getResultWinner,
  };
};

export { resultWinnerStoreImplementation, resultWinnerSelector };
