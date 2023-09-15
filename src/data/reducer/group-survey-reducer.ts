import type { AnyAction } from "redux";
import { GroupSurveyStore } from "src/domain/store/group-survey-store";
import { MapStateReducers } from "src/helpers/map-state-reducers";
import { GroupSurveyActionType } from "../action-type/group-survey-action-type";

type GroupSurveyStoreState = Omit<
  GroupSurveyStore,
  "getGroupSurveys" | "submit" | "remove"
>;

const INITIAL_STATE: GroupSurveyStoreState = {
  groupSurveys: undefined,
  groupSurvey: undefined,
  validation: undefined,
  status: undefined,
};

const GroupSurveyReducer = (
  state: GroupSurveyStoreState = INITIAL_STATE,
  action: AnyAction
) => {
  switch (action.type) {
    case GroupSurveyActionType.GET_GROUP_SURVEYS:
      return {
        ...state,
        groupSurveys: action.payload.data ?? [],
        status: action?.payload?.status,
        validation: action?.payload?.validation ?? [],
      };
    case GroupSurveyActionType.SUBMIT_GROUP_SURVEY:
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
        groupSurveys: MapStateReducers.addItemStateList(state?.groupSurveys, item),
      };
    case GroupSurveyActionType.UPDATE_GROUP_SURVEY:
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
        parties: MapStateReducers.updateStateList(state?.groupSurveys, items),
      };
    case GroupSurveyActionType.REMOVE_GROUP_SURVEY:
      return {
        ...state,
        parties: MapStateReducers.removeItemStateList(
          state?.groupSurveys,
          action.payload
        ),
      };
    default:
      return state;
  }
};

export { GroupSurveyReducer };
export type { GroupSurveyStoreState };
