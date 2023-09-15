import { GroupSurveyEntity, RequestGroupSurveyEntity } from "../entity/group-survey-entity";
import { ResponseEntity } from "../entity/response-entity";
import { BaseStore } from "./base-store";

interface GroupSurveyStore extends BaseStore {
    groupSurveys: [GroupSurveyEntity];
    groupSurvey: GroupSurveyEntity;
    getGroupSurveys(
        name?:string
    ): Promise<ResponseEntity<[GroupSurveyEntity]>>;
    submit(
        isEdit: boolean,
        request: RequestGroupSurveyEntity
      ): Promise<ResponseEntity<GroupSurveyEntity>>;
    
      remove(
        id: string
      ): Promise<ResponseEntity<GroupSurveyEntity>>;
}

export type { GroupSurveyStore };