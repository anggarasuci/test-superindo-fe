import { ResponseEntity } from "../entity/response-entity";
import { PdfSurveyEntity } from "../entity/survey-entity";
import { BaseStore } from "./base-store";

interface SurveyStore extends BaseStore {
  pdfResult: PdfSurveyEntity;
  uploadResults: [PdfSurveyEntity];

  uploadPdf(
    request: PdfSurveyEntity
  ): Promise<ResponseEntity<PdfSurveyEntity>>;

  getUploadSurveys(
    name?: string
  ): Promise<ResponseEntity<[PdfSurveyEntity]>>;

  removeUploadSurvey(
    id: string
  ): Promise<ResponseEntity<PdfSurveyEntity>>;
}

export type { SurveyStore };
