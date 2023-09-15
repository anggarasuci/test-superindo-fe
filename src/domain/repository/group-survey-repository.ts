import { GroupSurveyService } from "src/data/service/group-survey-service";
import { mapResponse } from "src/helpers/map-response";
import { GroupSurveyEntity, RequestGroupSurveyEntity } from "../entity/group-survey-entity";
import { ResponseEntity } from "../entity/response-entity";

const getGroupSurveys = async (
  name?: string,
): Promise<ResponseEntity<[GroupSurveyEntity]>> => {
  return mapResponse(await GroupSurveyService.getGroupSurveys(name));
};

const getGroupSurveyById = async (
  id: number
): Promise<ResponseEntity<GroupSurveyEntity>> => {
  return mapResponse(
    await GroupSurveyService.getGroupSurveyById(id)
  );
};

const submit = async (
  isEdit: boolean,
  request: RequestGroupSurveyEntity,
): Promise<ResponseEntity<GroupSurveyEntity>> => {
  return mapResponse(await GroupSurveyService.submit(isEdit, request));
};

const remove = async (
  id: string
): Promise<ResponseEntity<GroupSurveyEntity>> => {
  return mapResponse(await GroupSurveyService.remove(id));
};

export const GroupSurveyRepository = {
  getGroupSurveys,
  getGroupSurveyById,
  submit,
  remove
};
