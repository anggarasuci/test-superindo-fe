import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RequestExperienceEntity } from "src/domain/entity/candidate-experience-entity";
import { ExperienceStore } from "src/domain/store/candidate-experience-store";
import { ExperienceAction } from "../action/candidate-experience-action";
import { ExperienceStoreState } from "../reducer/candidate-experience-reducer";
import type { AppRootState } from "./app-store-implementation";

const experienceSelector = (state: AppRootState) => state.experience;

const experienceStoreImplementation = (): ExperienceStore => {
  const { experience, validation, experiences, status } = useSelector<
    AppRootState,
    ExperienceStoreState
  >(experienceSelector);
  const dispatch = useDispatch();

  //overidde from store
  const getExperiences = useCallback(
    (name?: string) => ExperienceAction.getExperienceAction(name)(dispatch),
    [dispatch]
  );

  const getExperienceById = useCallback(
    (id: string) => ExperienceAction.getExperienceByIdAction(id)(dispatch),
    [dispatch]
  );

  const submit = useCallback(
    (isEdit: boolean, request: RequestExperienceEntity) =>
      ExperienceAction.submitAction(isEdit, request)(dispatch),
    [dispatch]
  );

  const remove = useCallback(
    (id: number) => ExperienceAction.removeAction(id)(dispatch),
    [dispatch]
  );

  return {
    experiences,
    experience,
    validation,
    status,
    getExperiences,
    getExperienceById,
    submit,
    remove,
  };
};

export { experienceStoreImplementation, experienceSelector };
