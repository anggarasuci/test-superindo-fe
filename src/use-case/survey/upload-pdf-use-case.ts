import { PdfSurveyEntity } from "src/domain/entity/survey-entity";
import { SurveyStore } from "src/domain/store/survey-store";

const uploadPdfUseCase = async (
  store: SurveyStore,
  dapil: number,
  periodSurvey: string,
  file: any
) => {
  await store.uploadPdf(createParams(dapil, periodSurvey, file));
};

const createParams = (
  dapil: number,
  periodSurvey: string,
  file: any
): PdfSurveyEntity => {
  let result: PdfSurveyEntity = {
    dapilId: dapil,
    period_survey: periodSurvey,
    file: file,
  };
  return result;
};

export { uploadPdfUseCase };
