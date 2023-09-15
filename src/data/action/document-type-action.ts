import { RequestDocumentTypeEntity } from "src/domain/entity/document-type-entity";
import { DocumentTypeRepository } from "src/domain/repository/document-type-repository";
import { DocumentTypeActionType } from "../action-type/document-type-action-type";
import { SettingActionType } from "../action-type/setting-action-type";

const getDocumentTypesAction = (name?: string) => async (dispatch: any) => {
  dispatch({ type: SettingActionType.SET_LOADING, isLoading: true });
  const response = await DocumentTypeRepository.getDocumentTypes(name);
  dispatch({
    type: DocumentTypeActionType.GET_DOCUMENT_TYPES,
    payload: response,
  });
  dispatch({ type: SettingActionType.SET_LOADING, isLoading: false });
  return response;
};

const getDocumentTypeByIdAction = (id: number) => async (dispatch: any) => {
  dispatch({ type: SettingActionType.SET_LOADING, isLoading: true });
  const response = await DocumentTypeRepository.getDocumentTypeById(id);
  dispatch({
    type: DocumentTypeActionType.GET_DOCUMENT_TYPE_ID,
    payload: response,
  });
  dispatch({ type: SettingActionType.SET_LOADING, isLoading: false });
  return response;
};

const submitAction =
  (isEdit: boolean, request: RequestDocumentTypeEntity) =>
  async (dispatch: any) => {
    const actionType = isEdit
      ? DocumentTypeActionType.UPDATE_DOCUMENT_TYPE
      : DocumentTypeActionType.SUBMIT_DOCUMENT_TYPE;

    dispatch({ type: SettingActionType.SET_LOADING, isLoading: true });
    const response = await DocumentTypeRepository.submit(isEdit, request);
    dispatch({
      type: actionType,
      payload: response,
    });
    dispatch({ type: SettingActionType.SET_LOADING, isLoading: false });
    return response;
  };

const removeAction = (id: number) => async (dispatch: any) => {
  dispatch({ type: SettingActionType.SET_LOADING, isLoading: true });
  const response = await DocumentTypeRepository.remove(id);
  dispatch({
    type: DocumentTypeActionType.REMOVE_DOCUMENT_TYPE,
    payload: id,
  });
  dispatch({ type: SettingActionType.SET_LOADING, isLoading: false });
  return response;
};

export const DocumentTypeAction = {
  getDocumentTypesAction,
  getDocumentTypeByIdAction,
  submitAction,
  removeAction,
};
