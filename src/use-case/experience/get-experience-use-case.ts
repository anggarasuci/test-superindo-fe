import { ExperienceStore } from "src/domain/store/candidate-experience-store";

const getExperiencesUseCase = async (
  store: ExperienceStore,
  name?: string | ""
) => {
  await store.getExperiences(name);
};

export { getExperiencesUseCase };
