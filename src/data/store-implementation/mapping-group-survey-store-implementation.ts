import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RequestMappingGroupSurveyEntity } from "src/domain/entity/mapping-group-survey-entity";
import { MappingGroupSurveyStore } from "src/domain/store/mapping-group-survey-store";
import { MappingGroupSurveyAction } from "../action/mapping-group-survey-action";
import { MappingGroupSurveyStoreState } from "../reducer/mapping-group-survey-reducer";
import type { AppRootState } from "./app-store-implementation";

const mappingGroupSurveySelector = (state: AppRootState) => state.mappingGroupSurveys;

const mappingGroupSurveyStoreImplementation = (): MappingGroupSurveyStore => {
  const {
    mappingGroupSurveys,
    mappingGroupSurvey,
    validation,
    status,
  } = useSelector<AppRootState, MappingGroupSurveyStoreState>(mappingGroupSurveySelector);
  const dispatch = useDispatch();

  //overidde from store
  const getMappingGroupSurveys = useCallback(
    () =>
      MappingGroupSurveyAction.getMappingGroupSurveyAction()(dispatch),
    [dispatch]
  );

  const getMappingGroupSurveyById = useCallback(
    (id: number) =>
      MappingGroupSurveyAction.getMappingGroupSurveyByIdAction(id)(dispatch),
    [dispatch]
  );

  const getMappingGroupSurveyByGroupSurveyId = useCallback(
    (id: number) =>
      MappingGroupSurveyAction.getMappingGroupSurveyByGroupSurveyIdAction(id)(dispatch),
    [dispatch]
  );

  const submit = useCallback(
    (isEdit: boolean, request: RequestMappingGroupSurveyEntity) =>
      MappingGroupSurveyAction.submitAction(isEdit, request)(dispatch),
    [dispatch]
  );

  const remove = useCallback(
    (id: number) =>
      MappingGroupSurveyAction.removeAction(id)(dispatch),
    [dispatch]
  );

  return {
    mappingGroupSurveys,
    mappingGroupSurvey,
    validation,
    status,
    getMappingGroupSurveys,
    getMappingGroupSurveyByGroupSurveyId,
    getMappingGroupSurveyById,
    submit,
    remove,
  };
};

export { mappingGroupSurveyStoreImplementation, mappingGroupSurveySelector };
