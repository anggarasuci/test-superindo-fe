import { RequestExperienceEntity } from "src/domain/entity/candidate-experience-entity";
import { ExperienceStore } from "src/domain/store/candidate-experience-store";

const submitExperienceUseCase = async (
  store: ExperienceStore,
  isEdit: boolean,
  id: number | null,
  company: string | "",
  position: string | "",
  year: number | null,
  candidate: number
) => {
  await store.submit(
    isEdit,
    createParams(id, company, position, year, candidate)
  );
};

const createParams = (
  id: number,
  company: string,
  position: string,
  year: number,
  candidate: number
): RequestExperienceEntity => {
  let result: RequestExperienceEntity = {
    id: id,
    company: company,
    position: position,
    year: year,
    candidate: candidate,
  };
  return result;
};

export { submitExperienceUseCase };
