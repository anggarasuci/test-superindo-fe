import { MappingGroupSurveyStore } from "src/domain/store/mapping-group-survey-store";

const removeMappingGroupSurveyUseCase = async (
  store: MappingGroupSurveyStore,
  id: number
) => {
  await store.remove(id);
  await store.getMappingGroupSurveys();
};

export { removeMappingGroupSurveyUseCase };
