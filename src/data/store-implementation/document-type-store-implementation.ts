import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RequestDocumentTypeEntity } from "src/domain/entity/document-type-entity";
import { DocumentTypeStore } from "src/domain/store/document-type-store";
import { DocumentTypeAction } from "../action/document-type-action";
import { DocumentTypeStoreState } from "../reducer/document-type-reducer";
import type { AppRootState } from "./app-store-implementation";

const documentTypeSelector = (state: AppRootState) => state.documentType;

const documentTypeStoreImplementation = (): DocumentTypeStore => {
  const {
    documentTypes,
    validation,
    documentType,
    status,
  } = useSelector<AppRootState, DocumentTypeStoreState>(documentTypeSelector);
  const dispatch = useDispatch();

  //overidde from store
  const getDocumentTypes = useCallback(
    (name: string) =>
      DocumentTypeAction.getDocumentTypesAction(name)(dispatch),
    [dispatch]
  );

  const getDocumentTypeById = useCallback(
    (id: number) =>
      DocumentTypeAction.getDocumentTypeByIdAction(id)(dispatch),
    [dispatch]
  );

  const submit = useCallback(
    (isEdit: boolean, request: RequestDocumentTypeEntity) =>
      DocumentTypeAction.submitAction(isEdit, request)(dispatch),
    [dispatch]
  );

  const remove = useCallback(
    (id: number) =>
      DocumentTypeAction.removeAction(id)(dispatch),
    [dispatch]
  );

  return {
    documentTypes,
    documentType,
    validation,
    status,
    getDocumentTypes,
    getDocumentTypeById,
    submit,
    remove
  };
};

export { documentTypeStoreImplementation, documentTypeSelector };
