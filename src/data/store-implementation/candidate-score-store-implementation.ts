import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RequestScoreEntity } from "src/domain/entity/candidate-score-entity";
import { ScoreStore } from "src/domain/store/candidate-score-store";
import { ScoreAction } from "../action/candidate-score-action";
import { ScoreStoreState } from "../reducer/candidate-score-reducer";
import type { AppRootState } from "./app-store-implementation";

const scoreSelector = (state: AppRootState) => state.score;

const scoreStoreImplementation = (): ScoreStore => {
  const { scores, validation, status } = useSelector<
    AppRootState,
    ScoreStoreState
  >(scoreSelector);
  const dispatch = useDispatch();

  //overidde from store
  const getScoreByCandidate = useCallback(
    (candidateId: number) =>
      ScoreAction.getScoreByCandidate(candidateId)(dispatch),
    [dispatch]
  );

  const submit = useCallback(
    (isEdit: boolean, request: RequestScoreEntity) =>
      ScoreAction.submitAction(isEdit, request)(dispatch),
    [dispatch]
  );

  return {
    scores,
    validation,
    status,
    getScoreByCandidate,
    submit,
  };
};

export { scoreStoreImplementation, scoreSelector };
