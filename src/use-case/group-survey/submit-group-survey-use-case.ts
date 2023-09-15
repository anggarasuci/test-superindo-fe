import {
    RequestGroupSurveyEntity
  } from "src/domain/entity/group-survey-entity";
  import { GroupSurveyStore } from "src/domain/store/group-survey-store";
  
  const submitGroupSurveyUseCase = async (
    store: GroupSurveyStore,
    isEdit: boolean,
    id: number | null,
    seq: number | null,
    name: string | "",
  ) => {
    await store.submit(
      isEdit,
      createParams(
        id,
        seq,
        name
      )
    );
  };
  
  const createParams = (
    id: number,
    seq: number,
    name: string
  ): RequestGroupSurveyEntity => {
    let result: RequestGroupSurveyEntity = {
      id: id,
      seq: seq,
      name: name
    };
    return result;
  };
  
  export { submitGroupSurveyUseCase };
  