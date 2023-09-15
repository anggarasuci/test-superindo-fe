import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PeriodStore } from "src/domain/store/period-store";
import { PeriodAction } from "../action/period-action";
import { PeriodStoreState } from "../reducer/period-reducer";
import type { AppRootState } from "./app-store-implementation";

const periodSelector = (state: AppRootState) => state.period;

const periodStoreImplementation = (): PeriodStore => {
  const {
    periods,
    validation,
    periodById,
    status,
  } = useSelector<AppRootState, PeriodStoreState>(periodSelector);
  const dispatch = useDispatch();

  //overidde from store
  const getPeriods = useCallback(
    (name?: string) =>
      PeriodAction.getPeriodAction(name)(dispatch),
    [dispatch]
  );

  return {
    periods,
    periodById,
    validation,
    status,
    getPeriods
  };
};

export { periodStoreImplementation, periodSelector };
