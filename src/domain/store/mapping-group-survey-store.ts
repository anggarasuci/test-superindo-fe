import { MappingGroupSurveyEntity, RequestMappingGroupSurveyEntity } from "../entity/mapping-group-survey-entity";
import { ResponseEntity } from "../entity/response-entity";
import { BaseStore } from "./base-store";

interface MappingGroupSurveyStore extends BaseStore {
    mappingGroupSurveys: [MappingGroupSurveyEntity];
    mappingGroupSurvey: MappingGroupSurveyEntity;
    getMappingGroupSurveys(): Promise<ResponseEntity<[MappingGroupSurveyEntity]>>;
    getMappingGroupSurveyByGroupSurveyId(
        groupSurveyId:number
    ): Promise<ResponseEntity<[MappingGroupSurveyEntity]>>;
    getMappingGroupSurveyById(
        id:number
    ): Promise<ResponseEntity<MappingGroupSurveyEntity>>;
    submit(
      isEdit: boolean,
      request: RequestMappingGroupSurveyEntity
    ): Promise<ResponseEntity<MappingGroupSurveyEntity>>;
    
    remove(
      id: number
    ): Promise<ResponseEntity<MappingGroupSurveyEntity>>;
}

export type { MappingGroupSurveyStore };