import { MappingGroupSurveyStore } from "src/domain/store/mapping-group-survey-store";

const getMappingGroupSurveyUseCase = async (
  store: MappingGroupSurveyStore
) => {
  await store.getMappingGroupSurveys();
};

export { getMappingGroupSurveyUseCase };
