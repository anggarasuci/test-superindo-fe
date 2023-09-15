import { ExpereinceService } from "src/data/service/candidate-experience-service";
import { mapResponse } from "src/helpers/map-response";
import {
  ExperienceEntity,
  RequestExperienceEntity,
} from "../entity/candidate-experience-entity";
import { ResponseEntity } from "../entity/response-entity";

const getExperience = async (
  name?: string
): Promise<ResponseEntity<[ExperienceEntity]>> => {
  return mapResponse(await ExpereinceService.getExperience(name));
};

const getExperienceById = async (
  id: string
): Promise<ResponseEntity<ExperienceEntity>> => {
  return mapResponse(await ExpereinceService.getExperienceById(id));
};

const submit = async (
  isEdit: boolean,
  request: RequestExperienceEntity
): Promise<ResponseEntity<ExperienceEntity>> => {
  return mapResponse(await ExpereinceService.submit(isEdit, request));
};

const remove = async (
  id: number
): Promise<ResponseEntity<ExperienceEntity>> => {
  return mapResponse(await ExpereinceService.remove(id));
};

export const ExperinceRepository = {
  getExperience,
  getExperienceById,
  submit,
  remove,
};
