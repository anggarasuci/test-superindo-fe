import {
    RequestMappingGroupSurveyEntity
  } from "src/domain/entity/mapping-group-survey-entity";
  import { MappingGroupSurveyStore } from "src/domain/store/mapping-group-survey-store";
  
  const submitMappingGroupSurveyUseCase = async (
    store: MappingGroupSurveyStore,
    isEdit: boolean,
    id: number | null,
    dapil: number | null,
    group_period_survey: number | null,
    period_survey: string | "",
    institution: number | null
  ) => {
    await store.submit(
      isEdit,
      createParams(
        id,
        dapil, 
        group_period_survey,
        period_survey,
        institution
      )
    );
  };
  
  const createParams = (
    id: number,
    dapil: number,
    group_period_survey: number,
    period_survey: string,
    institution: number,
  ): RequestMappingGroupSurveyEntity => {
    let result: RequestMappingGroupSurveyEntity = {
      id: id,
      dapil,
      group_period_survey,
      period_survey,
      institution
    };
    return result;
  };
  
  export { submitMappingGroupSurveyUseCase };
  