import { ResultService } from "src/data/service/result-service";
import { mapResponse } from "src/helpers/map-response";
import { ResponseEntity } from "../entity/response-entity";
import {
  SyncEntity,
  SyncScoreEntity,
  SyncSurveyEntity,
} from "../entity/sync-entity";
import {
  UploadEntity,
  UploadScoreEntity,
  UploadSurveyEntity,
  UploadWinnerEntity,
} from "../entity/upload-entity";

const upload = async (
  actionType: string,
  uploadEntity: UploadEntity
): Promise<ResponseEntity<any>> => {
  return mapResponse(await ResultService.upload(actionType, uploadEntity));
};

const syncData = async (
  actionType: string,
  syncEntity: SyncEntity
): Promise<ResponseEntity<any>> => {
  return mapResponse(await ResultService.syncData(actionType, syncEntity));
};

const uploadWinner = async (
  actionType: string,
  uploadWinnerEntity: UploadWinnerEntity
): Promise<ResponseEntity<any>> => {
  return mapResponse(
    await ResultService.uploadWinner(actionType, uploadWinnerEntity)
  );
};

const uploadSurvey = async (
  actionType: string,
  uploadSurveyEntity: UploadSurveyEntity
): Promise<ResponseEntity<any>> => {
  return mapResponse(
    await ResultService.uploadSurvey(actionType, uploadSurveyEntity)
  );
};

const syncSurveyData = async (
  actionType: string,
  syncSurveyEntity: SyncSurveyEntity
): Promise<ResponseEntity<any>> => {
  return mapResponse(
    await ResultService.syncSurveyData(actionType, syncSurveyEntity)
  );
};

const uploadScore = async (
  actionType: string,
  uploadScoreEntity: UploadScoreEntity
): Promise<ResponseEntity<any>> => {
  return mapResponse(
    await ResultService.uploadScore(actionType, uploadScoreEntity)
  );
};

const syncScoreData = async (
  actionType: string,
  syncScoreEntity: SyncScoreEntity
): Promise<ResponseEntity<any>> => {
  return mapResponse(
    await ResultService.syncScoreData(actionType, syncScoreEntity)
  );
};

export const ResultRepository = {
  upload,
  syncData,
  uploadWinner,
  uploadSurvey,
  syncSurveyData,
  uploadScore,
  syncScoreData,
};
