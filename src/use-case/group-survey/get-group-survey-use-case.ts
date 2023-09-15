import { GroupSurveyStore } from "src/domain/store/group-survey-store";

const getGroupSurveyUseCase = async (
  store: GroupSurveyStore,
  name?: string | ""
) => {
  await store.getGroupSurveys(name);
};

export { getGroupSurveyUseCase };
