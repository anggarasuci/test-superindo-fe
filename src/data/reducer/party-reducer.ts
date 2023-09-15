import type { AnyAction } from "redux";
import { PartyStore } from "src/domain/store/party-store";
import { MapStateReducers } from "src/helpers/map-state-reducers";
import { PartyActionType } from "../action-type/party-action-type";

type PartyStoreState = Omit<
  PartyStore,
  "getParties" | "submit" | "remove"
>;

const INITIAL_STATE: PartyStoreState = {
  parties: undefined,
  partyById: undefined,
  validation: undefined,
  status: undefined,
};

const partyReducer = (
  state: PartyStoreState = INITIAL_STATE,
  action: AnyAction
) => {
  switch (action.type) {
    case PartyActionType.GET_PARTIES:
      return {
        ...state,
        parties: action.payload.data ?? [],
        status: action?.payload?.status,
        validation: action?.payload?.validation ?? [],
      };
    case PartyActionType.SUBMIT_PARTY:
      if (action.payload?.status?.isError) {
        return {
          ...state,
          status: action.payload?.status,
          validation: action?.payload?.validation
        }
      }
      const item = { id: action.payload.id, counter_no: action.payload.counter_no, name: action.payload.name, logo: action.payload.logo, color: action.payload.color, secondary_color: action.payload.secondary_color };
      if (!item) {
        return {
          ...state
        }
      }
      return {
        ...state,
        parties: MapStateReducers.addItemStateList(state?.parties, item),
      };
    case PartyActionType.UPDATE_PARTY:
      if (action.payload?.status?.isError) {
        return {
          ...state,
          status: action.payload?.status,
          validation: action?.payload?.validation
        }
      }
      const items = [{ id: action.payload.id, counter_no: action.payload.counter_no, name: action.payload.name, logo: action.payload.logo, color: action.payload.color, secondary_color: action.payload.secondary_color }];
      if (!item) {
        return {
          ...state
        }
      }
      return {
        ...state,
        parties: MapStateReducers.updateStateList(state?.parties, items),
      };
    case PartyActionType.REMOVE_PARTY:
      return {
        ...state,
        parties: MapStateReducers.removeItemStateList(
          state?.parties,
          action.payload
        ),
      };
    default:
      return state;
  }
};

export { partyReducer };
export type { PartyStoreState };
