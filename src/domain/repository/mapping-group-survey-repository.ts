import { MappingGroupSurveyService } from "src/data/service/mapping-group-survey-service";
import { mapResponse } from "src/helpers/map-response";
import { MappingGroupSurveyEntity, RequestMappingGroupSurveyEntity } from "../entity/mapping-group-survey-entity";
import { ResponseEntity } from "../entity/response-entity";

const getMappingGroupSurveys = async (): Promise<ResponseEntity<[MappingGroupSurveyEntity]>> => {
  return mapResponse(await MappingGroupSurveyService.getMappingGroupSurveys());
};

const getMappingGroupSurveysByGroupSurveyId = async (id: number): Promise<ResponseEntity<[MappingGroupSurveyEntity]>> => {
    return mapResponse(await MappingGroupSurveyService.getMappingGroupSurveysByGroupSurveyId(id));
  };

const getMappingGroupSurveyById = async (
  id: number
): Promise<ResponseEntity<MappingGroupSurveyEntity>> => {
  return mapResponse(
    await MappingGroupSurveyService.getMappingGroupSurveyById(id)
  );
};

const submit = async (
  isEdit: boolean,
  request: RequestMappingGroupSurveyEntity,
): Promise<ResponseEntity<MappingGroupSurveyEntity>> => {
  return mapResponse(await MappingGroupSurveyService.submit(isEdit, request));
};

const remove = async (
  id: number
): Promise<ResponseEntity<MappingGroupSurveyEntity>> => {
  return mapResponse(await MappingGroupSurveyService.remove(id));
};

export const MappingGroupSurveyRepository = {
  getMappingGroupSurveys,
  getMappingGroupSurveyById,
  getMappingGroupSurveysByGroupSurveyId,
  submit,
  remove
};
