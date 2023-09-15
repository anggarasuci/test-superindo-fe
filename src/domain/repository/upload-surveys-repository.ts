import { mapResponse } from "src/helpers/map-response";
import { ResponseEntity } from "../entity/response-entity";
import { UploadSurveysService } from "src/data/service/upload-surveys-service";
import { UploadSurveysEntity } from "../entity/upload-entity";

const getUploadSurveys = async (
    dapil: string
  ): Promise<ResponseEntity<[UploadSurveysEntity]>> => {
    return mapResponse(
      await UploadSurveysService.getUploadSurveys(dapil)
    );
  };

const getUploadSurveysById = async (
  id: string
): Promise<ResponseEntity<UploadSurveysEntity>> => {
  return mapResponse(
    await UploadSurveysService.getUploadSurveysById(id)
  );
};

export const UploadSurveysRepository = {
    getUploadSurveys,
  getUploadSurveysById
};
