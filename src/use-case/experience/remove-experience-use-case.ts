import { ExperienceStore } from "src/domain/store/candidate-experience-store";

const removeExperienceUseCase = async (store: ExperienceStore, id: number) => {
  await store.remove(id);
};

export { removeExperienceUseCase };
