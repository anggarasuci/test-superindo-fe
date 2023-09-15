import type { AnyAction } from "redux";
import { DocumentTypeStore } from "src/domain/store/document-type-store";
import { MapStateReducers } from "src/helpers/map-state-reducers";
import { DocumentTypeActionType } from "../action-type/document-type-action-type";

type DocumentTypeStoreState = Omit<
  DocumentTypeStore,
  "getDocumentTypes" | "getDocumentTypeById" | "submit" | "remove"
>;

const INITIAL_STATE: DocumentTypeStoreState = {
  documentTypes: undefined,
  documentType: undefined,
  validation: undefined,
  status: undefined,
};

const documentTypeReducer = (
  state: DocumentTypeStoreState = INITIAL_STATE,
  action: AnyAction
) => {
  if (action.payload?.status?.isError)
    return {
      ...state,
      status: action.payload?.status,
      validation: action.payload?.validation ?? [],
    };

  switch (action.type) {
    case DocumentTypeActionType.GET_DOCUMENT_TYPES:
      return {
        ...state,
        documentTypes: action.payload.data ?? [],
        status: action?.payload?.status,
        validation: action?.payload?.validation ?? [],
      };
    case DocumentTypeActionType.GET_DOCUMENT_TYPE_ID:
      return {
        ...state,
        documentType: action.payload.data ?? {},
        status: action?.payload?.status,
        validation: action?.payload?.validation ?? []
      };
    case DocumentTypeActionType.SUBMIT_DOCUMENT_TYPE:
      return {
        ...state,
        status: action.payload?.status,
        validation: action.payload?.validation ?? [],
      };
    case DocumentTypeActionType.UPDATE_DOCUMENT_TYPE:
      return {
        ...state,
        status: action.payload?.status,
        validation: action.payload?.validation ?? [],
      };
    case DocumentTypeActionType.REMOVE_DOCUMENT_TYPE:
      return {
        ...state,
        calegdocuments: MapStateReducers.removeItemStateList(
          state?.documentTypes,
          action.payload
        ),
      };
    default:
      return state;
  }
};

export { documentTypeReducer };
export type { DocumentTypeStoreState };
