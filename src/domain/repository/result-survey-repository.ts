import { ResultSurveyService } from "src/data/service/result-survey-service";
import { mapResponse } from "src/helpers/map-response";
import { ResponseEntity } from "../entity/response-entity";
import { RequestResultNationalEntity, ResultNationalEntity } from "../entity/result-national-entity";
import {
    RequestResultSurveyEntity,
    ResultSurveyEntity
} from "../entity/result-survey-entity";

const getResultSurvey = async (
  requestEntity: RequestResultSurveyEntity
): Promise<ResponseEntity<[ResultSurveyEntity]>> => {
  return mapResponse(await ResultSurveyService.getResultSurvey(requestEntity));
};

const getResultSurveyNational = async (
  requestEntity: RequestResultNationalEntity
): Promise<ResponseEntity<[ResultNationalEntity]>> => {
  return mapResponse(await ResultSurveyService.getResultSurveyNational(requestEntity));
};

export const ResultSurveyRepository = {
  getResultSurvey,
  getResultSurveyNational
};
