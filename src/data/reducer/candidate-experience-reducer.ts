import type { AnyAction } from "redux";
import { ExperienceStore } from "src/domain/store/candidate-experience-store";
import { MapStateReducers } from "src/helpers/map-state-reducers";
import { CandidateExperienceActionType } from "../action-type/candidate-experience-action-type";

type ExperienceStoreState = Omit<
  ExperienceStore,
  "getExperiences" | "getExperienceById" | "submit" | "remove"
>;

const INITIAL_STATE: ExperienceStoreState = {
  experiences: undefined,
  experience: undefined,
  validation: undefined,
  status: undefined,
};

const experienceReducer = (
  state: ExperienceStoreState = INITIAL_STATE,
  action: AnyAction
) => {
  if (action.payload?.status?.isError)
    return {
      ...state,
      status: action.payload?.status,
      validation: action.payload?.validation ?? [],
    };

  switch (action.type) {
    case CandidateExperienceActionType.GET_CANDIDATES_EXPERIENCE:
      return {
        ...state,
        experiences: action.payload.data ?? [],
        status: action?.payload?.status,
        validation: action?.payload?.validation ?? [],
      };
    case CandidateExperienceActionType.GET_CANDIDATE_EXPERIENCE_BY_ID:
      return {
        ...state,
        experience: action.payload.data ?? {},
        status: action?.payload?.status,
        validation: action?.payload?.validation ?? [],
      };
    case CandidateExperienceActionType.SUBMIT_CANDIDATE_EXPERIENCE:
      return {
        ...state,
        status: action.payload?.status,
        validation: action.payload?.validation ?? [],
      };
    case CandidateExperienceActionType.UPDATE_CANDIDATE_EXPERIENCE:
      return {
        ...state,
        status: action.payload?.status,
        validation: action.payload?.validation ?? [],
      };
    case CandidateExperienceActionType.REMOVE_CANDIDATE_EXPERIENCE:
      return {
        ...state,
        experiences: MapStateReducers.removeItemStateList(
          state?.experiences,
          action.payload
        ),
      };
    default:
      return state;
  }
};

export { experienceReducer };
export type { ExperienceStoreState };
