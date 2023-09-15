import type { AnyAction } from "redux";
import { OrganizationStore } from "src/domain/store/candidate-organization-store";
import { MapStateReducers } from "src/helpers/map-state-reducers";
import { CandidateOrganizationActionType } from "../action-type/candidate-organization-action-type";

type OrganizationStoreState = Omit<
  OrganizationStore,
  "getOrganizations" | "getOrganizationById" | "submit" | "remove"
>;

const INITIAL_STATE: OrganizationStoreState = {
  organizations: undefined,
  organization: undefined,
  validation: undefined,
  status: undefined,
};

const organizationReducer = (
  state: OrganizationStoreState = INITIAL_STATE,
  action: AnyAction
) => {
  if (action.payload?.status?.isError)
    return {
      ...state,
      status: action.payload?.status,
      validation: action.payload?.validation ?? [],
    };

  switch (action.type) {
    case CandidateOrganizationActionType.GET_CANDIDATES_ORGANIZATION:
      return {
        ...state,
        organizations: action.payload.data ?? [],
        status: action?.payload?.status,
        validation: action?.payload?.validation ?? [],
      };
    case CandidateOrganizationActionType.GET_CANDIDATE_ORGANIZATION_BY_ID:
      return {
        ...state,
        organization: action.payload.data ?? {},
        status: action?.payload?.status,
        validation: action?.payload?.validation ?? [],
      };
    case CandidateOrganizationActionType.SUBMIT_CANDIDATE_ORGANIZATION:
      return {
        ...state,
        status: action.payload?.status,
        validation: action.payload?.validation ?? [],
      };
    case CandidateOrganizationActionType.UPDATE_CANDIDATE_ORGANIZATION:
      return {
        ...state,
        status: action.payload?.status,
        validation: action.payload?.validation ?? [],
      };
    case CandidateOrganizationActionType.REMOVE_CANDIDATE_ORGANIZATION:
      return {
        ...state,
        organizations: MapStateReducers.removeItemStateList(
          state?.organizations,
          action.payload
        ),
      };
    default:
      return state;
  }
};

export { organizationReducer };
export type { OrganizationStoreState };
