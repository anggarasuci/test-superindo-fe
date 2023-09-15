import {
  ExperienceEntity,
  RequestExperienceEntity,
} from "../entity/candidate-experience-entity";
import { ResponseEntity } from "../entity/response-entity";
import { BaseStore } from "./base-store";

interface ExperienceStore extends BaseStore {
  experiences: [ExperienceEntity];
  experience: ExperienceEntity;

  // Actions
  getExperiences(name?: string): Promise<ResponseEntity<[ExperienceEntity]>>;

  getExperienceById(id: string): Promise<ResponseEntity<ExperienceEntity>>;

  submit(
    isEdit: boolean,
    request: RequestExperienceEntity
  ): Promise<ResponseEntity<ExperienceEntity>>;

  remove(id: number): Promise<ResponseEntity<ExperienceEntity>>;
}

export type { ExperienceStore };
