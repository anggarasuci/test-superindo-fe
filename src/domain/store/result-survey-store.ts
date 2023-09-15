import { ResponseEntity } from "../entity/response-entity";
import {
  RequestResultNationalEntity,
  ResultNationalEntity,
} from "../entity/result-national-entity";
import {
  RequestResultSurveyEntity,
  ResultSurveyEntity,
} from "../entity/result-survey-entity";
import { BaseStore } from "./base-store";

interface ResultSurveyStore extends BaseStore {
  resultSurveys: [ResultSurveyEntity];
  resultSurveyNationals: [ResultNationalEntity];

  getResultSurvey(
    requestEntity: RequestResultSurveyEntity
  ): Promise<ResponseEntity<[ResultSurveyEntity]>>;
  getResultSurveyNational(
    requestEntity: RequestResultNationalEntity
  ): Promise<ResponseEntity<[ResultNationalEntity]>>;
}

export type { ResultSurveyStore };
