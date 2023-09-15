import { ExperienceStore } from "src/domain/store/candidate-experience-store";

const getExperienceByIdUseCase = async (
  store: ExperienceStore,
  id: string | ""
) => {
  await store.getExperienceById(id);
};

export { getExperienceByIdUseCase };
