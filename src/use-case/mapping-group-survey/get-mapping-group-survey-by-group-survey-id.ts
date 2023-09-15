import { MappingGroupSurveyStore } from "src/domain/store/mapping-group-survey-store";

const getMappingGroupSurveyByGroupSurveyIdUseCase = async (
  store: MappingGroupSurveyStore,
  id: number
) => {
  await store.getMappingGroupSurveyByGroupSurveyId(id);
};

export { getMappingGroupSurveyByGroupSurveyIdUseCase };
