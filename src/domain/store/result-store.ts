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
import { BaseStore } from "./base-store";

interface ResultStore extends BaseStore {
  // Actions
  upload(uploadEntity: UploadEntity): Promise<ResponseEntity<any>>;
  syncData(syncEntity: SyncEntity): Promise<ResponseEntity<any>>;
  uploadWinner(
    uploadWinnerEntity: UploadWinnerEntity
  ): Promise<ResponseEntity<any>>;
  uploadSurvey(
    uploadSurveyEntity: UploadSurveyEntity
  ): Promise<ResponseEntity<any>>;
  syncSurveyData(
    syncSurveyEntity: SyncSurveyEntity
  ): Promise<ResponseEntity<any>>;
  uploadScore(
    uploadScoreEntity: UploadScoreEntity
  ): Promise<ResponseEntity<any>>;
  syncScoreData(syncScoreEntity: SyncScoreEntity): Promise<ResponseEntity<any>>;
}

export type { ResultStore };
