import { RequestPartyEntity } from "src/domain/entity/party-entity";
import { PartyRepository } from "src/domain/repository/party-repository";
import { PartyActionType } from "../action-type/party-action-type";
import { SettingActionType } from "../action-type/setting-action-type";

const getPartyAction =
  (name?: string) => async (dispatch: any) => {
    dispatch({ type: SettingActionType.SET_LOADING, isLoading: true });
    const response = await PartyRepository.getParties(
      name
    );
    dispatch({
      type: PartyActionType.GET_PARTIES,
      payload: response,
    });
    dispatch({ type: SettingActionType.SET_LOADING, isLoading: false });
    return response;
  };

const submitAction =
  (isEdit: boolean, request: RequestPartyEntity) =>
  async (dispatch: any) => {
    const actionType = isEdit
      ? PartyActionType.UPDATE_PARTY
      : PartyActionType.SUBMIT_PARTY;

    dispatch({ type: SettingActionType.SET_LOADING, isLoading: true });
    const response = await PartyRepository.submit(
      isEdit,
      request
    );
    dispatch({
      type: actionType,
      payload: response,
    });
    dispatch({ type: SettingActionType.SET_LOADING, isLoading: false });
    return response;
  };

const removeAction =
  (id: number) => async (dispatch: any) => {
    dispatch({ type: SettingActionType.SET_LOADING, isLoading: true });
    const response = await PartyRepository.remove(id);
    dispatch({
      type: PartyActionType.REMOVE_PARTY,
      payload: id,
    });
    dispatch({ type: SettingActionType.SET_LOADING, isLoading: false });
    return response;
  };

export const PartyAction = { getPartyAction, submitAction, removeAction };
