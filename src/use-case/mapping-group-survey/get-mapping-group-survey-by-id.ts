import { MappingGroupSurveyStore } from "src/domain/store/mapping-group-survey-store";

const getMappingGroupSurveyByIdUseCase = async (
  store: MappingGroupSurveyStore,
  id: number
) => {
  await store.getMappingGroupSurveyById(id);
};

export { getMappingGroupSurveyByIdUseCase };
