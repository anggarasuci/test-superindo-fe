import { GroupSurveyStore } from "src/domain/store/group-survey-store";

const removeGroupSurveyUseCase = async (
  store: GroupSurveyStore,
  id: string
) => {
  await store.remove(id);
  await store.getGroupSurveys("");
};

export { removeGroupSurveyUseCase };
