import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RequestGroupSurveyEntity } from "src/domain/entity/group-survey-entity";
import { GroupSurveyStore } from "src/domain/store/group-survey-store";
import { GroupSurveyAction } from "../action/group-survey-action";
import { GroupSurveyStoreState } from "../reducer/group-survey-reducer";
import type { AppRootState } from "./app-store-implementation";

const groupSurveySelector = (state: AppRootState) => state.groupSurveys;

const groupSurveyStoreImplementation = (): GroupSurveyStore => {
  const {
    groupSurveys,
    validation,
    groupSurvey,
    status,
  } = useSelector<AppRootState, GroupSurveyStoreState>(groupSurveySelector);
  const dispatch = useDispatch();

  //overidde from store
  const getGroupSurveys = useCallback(
    (name?: string) =>
      GroupSurveyAction.getGroupSurveyAction(name)(dispatch),
    [dispatch]
  );

  const submit = useCallback(
    (isEdit: boolean, request: RequestGroupSurveyEntity) =>
      GroupSurveyAction.submitAction(isEdit, request)(dispatch),
    [dispatch]
  );

  const remove = useCallback(
    (id: string) =>
      GroupSurveyAction.removeAction(id)(dispatch),
    [dispatch]
  );

  return {
    groupSurveys,
    groupSurvey,
    validation,
    status,
    getGroupSurveys,
    submit,
    remove
  };
};

export { groupSurveyStoreImplementation, groupSurveySelector };
