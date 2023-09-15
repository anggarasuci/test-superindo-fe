import { SurveyService } from "src/data/service/survey-service";
import { mapResponse } from "src/helpers/map-response";
import { ResponseEntity } from "../entity/response-entity";
import { PdfSurveyEntity } from "../entity/survey-entity";

const uploadPdf = async (
  request: PdfSurveyEntity
): Promise<ResponseEntity<PdfSurveyEntity>> => {
  return mapResponse(await SurveyService.postSurvey(request));
};

const getUploadSurveys = async (
  name?: string
): Promise<ResponseEntity<[PdfSurveyEntity]>> => {
  return mapResponse(await SurveyService.getSurveys(name));
};

const removeUploadSurvey = async (
  id: string
): Promise<ResponseEntity<PdfSurveyEntity>> => {
  return mapResponse(await SurveyService.removeUploadSurvey(id));
};

export const SurveyRepository = {
  uploadPdf,
  getUploadSurveys,
  removeUploadSurvey,
};
