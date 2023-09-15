import { RequestLocationEntity } from "src/domain/entity/location-entity";
import { LocationRepository } from "src/domain/repository/location-repository";
import { LocationType } from "src/helpers/constant/location-type";
import { SettingActionType } from "../action-type/setting-action-type";

const getLocationAction =
  (
    locationTypeKey: string,
    value?: string,
    withReference?: boolean,
    referenceValue?: string,
    isFromModal?: boolean
  ) =>
  async (dispatch: any) => {
    const actionType = isFromModal
      ? LocationType[locationTypeKey]?.getAllActionTypeModal
      : LocationType[locationTypeKey]?.getAllActionType;

    dispatch({ type: SettingActionType.SET_LOADING, isLoading: true });
    const response = await LocationRepository.getLocations(
      actionType,
      locationTypeKey,
      value,
      withReference,
      referenceValue
    );
    dispatch({
      type: actionType,
      payload: response,
    });

    //always appanend to modal
    if (!isFromModal) dispatch({
      type: LocationType[locationTypeKey]?.getAllActionTypeModal,
      payload: response,
    });

    dispatch({ type: SettingActionType.SET_LOADING, isLoading: false });
    return response;
  };

const submitAction =
  (locationTypeKey: string, isEdit: boolean, request: RequestLocationEntity) =>
  async (dispatch: any) => {
    const actionType = isEdit
      ? LocationType[locationTypeKey].updateActionType
      : LocationType[locationTypeKey].submitActionType;

    dispatch({ type: SettingActionType.SET_LOADING, isLoading: true });
    const response = await LocationRepository.submit(
      actionType,
      locationTypeKey,
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
  (locationTypeKey: string, id: string) => async (dispatch: any) => {
    dispatch({ type: SettingActionType.SET_LOADING, isLoading: true });
    const response = await LocationRepository.remove(
      LocationType[locationTypeKey].removeActionType,
      locationTypeKey,
      id
    );
    dispatch({
      type: LocationType[locationTypeKey].removeActionType,
      payload: id,
    });
    dispatch({ type: SettingActionType.SET_LOADING, isLoading: false });
    return response;
  };

const selectLocationAction =
  (locationTypeKey: string, id: string, isFromModal?: boolean) =>
  (dispatch: any) => {
    dispatch({
      type: isFromModal
        ? LocationType[locationTypeKey].getByIdActionTypeModal
        : LocationType[locationTypeKey].getByIdActionType,
      payload: id,
    });

    //always appanend to modal
    if (!isFromModal) dispatch({
      type: LocationType[locationTypeKey].getByIdActionTypeModal,
      payload: id,
    });
  };

export const LocationAction = {
  getLocationAction,
  submitAction,
  removeAction,
  selectLocationAction,
};
