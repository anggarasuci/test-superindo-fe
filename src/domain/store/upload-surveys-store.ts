import { ResponseEntity } from "../entity/response-entity";
import { BaseStore } from "./base-store";
import { UploadSurveysEntity } from "../entity/upload-entity";

interface UploadSurveysStore extends BaseStore {
    uploadSurveys: [UploadSurveysEntity];
    uploadSurveysById: UploadSurveysEntity;
    getUploadSurveys(
        dapil?:string
    ): Promise<ResponseEntity<[UploadSurveysEntity]>>;
    getUploadSurveysById(
        id?:string
    ): Promise<ResponseEntity<UploadSurveysEntity>>;
}

export type { UploadSurveysStore };