import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RequestScoreTypeEntity } from "src/domain/entity/score-type-entity";
import { ScoreTypeStore } from "src/domain/store/score-type-store";
import { ScoreTypeAction } from "../action/score-type-action";
import { ScoreTypeStoreState } from "../reducer/score-type-reducer";
import type { AppRootState } from "./app-store-implementation";

const scoreTypeSelector = (state: AppRootState) => state.scoreType;

const scoreTypeStoreImplementation = (): ScoreTypeStore => {
  const {
    scoreTypes,
    validation,
    scoreType,
    status,
  } = useSelector<AppRootState, ScoreTypeStoreState>(scoreTypeSelector);
  const dispatch = useDispatch();

  //overidde from store
  const getScoreTypes = useCallback(
    (name: string) =>
      ScoreTypeAction.getScoreTypesAction(name)(dispatch),
    [dispatch]
  );

  const getScoreTypeById = useCallback(
    (id: number) =>
      ScoreTypeAction.getScoreTypeByIdAction(id)(dispatch),
    [dispatch]
  );

  const submit = useCallback(
    (isEdit: boolean, request: RequestScoreTypeEntity) =>
      ScoreTypeAction.submitAction(isEdit, request)(dispatch),
    [dispatch]
  );

  const remove = useCallback(
    (id: number) =>
      ScoreTypeAction.removeAction(id)(dispatch),
    [dispatch]
  );

  return {
    scoreTypes,
    scoreType,
    validation,
    status,
    getScoreTypes,
    getScoreTypeById,
    submit,
    remove
  };
};

export { scoreTypeStoreImplementation, scoreTypeSelector };
