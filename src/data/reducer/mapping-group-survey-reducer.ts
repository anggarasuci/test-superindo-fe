import type { AnyAction } from "redux";
import { MappingGroupSurveyStore } from "src/domain/store/mapping-group-survey-store";
import { MapStateReducers } from "src/helpers/map-state-reducers";
import { MappingGroupSurveyActionType } from "../action-type/mapping-group-survey-action-type";

type MappingGroupSurveyStoreState = Omit<
  MappingGroupSurveyStore,
  "getMappingGroupSurveys" | "getMappingGroupSurveyById" | "getMappingGroupSurveyByGroupSurveyId" | "submit" | "remove"
>;

const INITIAL_STATE: MappingGroupSurveyStoreState = {
  mappingGroupSurveys: undefined,
  mappingGroupSurvey: undefined,
  validation: undefined,
  status: undefined,
};

const MappingGroupSurveyReducer = (
  state: MappingGroupSurveyStoreState = INITIAL_STATE,
  action: AnyAction
) => {
  switch (action.type) {
    case MappingGroupSurveyActionType.GET_MAPPING_GROUP_SURVEYS:
      return {
        ...state,
        mappingGroupSurveys: action.payload.data ?? [],
        status: action?.payload?.status,
        validation: action?.payload?.validation ?? [],
      };
    case MappingGroupSurveyActionType.GET_MAPPING_GROUP_SURVEY_BY_ID:
    return {
        ...state,
        mappingGroupSurvey: action.payload.data ?? {},
        status: action?.payload?.status,
        validation: action?.payload?.validation ?? [],
    };
    case MappingGroupSurveyActionType.GET_MAPPING_GROUP_SURVEY_BY_GROUP_SURVEY_ID:
        return {
            ...state,
            mappingGroupSurveys: action.payload.data ?? [],
            status: action?.payload?.status,
            validation: action?.payload?.validation ?? [],
        };
    case MappingGroupSurveyActionType.SUBMIT_MAPPING_GROUP_SURVEY:
      if (action.payload?.status?.isError) {
        return {
          ...state,
          status: action.payload?.status,
          validation: action?.payload?.validation
        }
      }
      const item = { id: action.payload.id, seq: action.payload.seq, name: action.payload.name };
      if (!item) {
        return {
          ...state
        }
      }
      return {
        ...state,
        mappingGroupSurveys: MapStateReducers.addItemStateList(state?.mappingGroupSurveys, item),
      };
    case MappingGroupSurveyActionType.UPDATE_MAPPING_GROUP_SURVEY:
      if (action.payload?.status?.isError) {
        return {
          ...state,
          status: action.payload?.status,
          validation: action?.payload?.validation
        }
      }
      const items = [{ id: action.payload.id, seq: action.payload.seq, name: action.payload.name }];
      if (!item) {
        return {
          ...state
        }
      }
      return {
        ...state,
        parties: MapStateReducers.updateStateList(state?.mappingGroupSurveys, items),
      };
    case MappingGroupSurveyActionType.REMOVE_MAPPING_GROUP_SURVEY:
      return {
        ...state,
        parties: MapStateReducers.removeItemStateList(
          state?.mappingGroupSurveys,
          action.payload
        ),
      };
    default:
      return state;
  }
};

export { MappingGroupSurveyReducer };
export type { MappingGroupSurveyStoreState };
