import getConfig from "next/config";
import { fetchWrapper } from "../../helpers/fetch-wrapper";
import { RequestDocumentTypeEntity } from "src/domain/entity/document-type-entity";
import { Endpoint } from "src/helpers/constant/endpoint";
import { DocumentTypeActionType } from "../action-type/document-type-action-type";
import { DefaultValue } from "src/helpers/constant/default-value";

const { publicRuntimeConfig } = getConfig();
const baseUrl = `${publicRuntimeConfig.apiUrl}${Endpoint.documentType}`;

const getDocumentTypes = async (name?: string) => {
  return fetchWrapper.get(
    DocumentTypeActionType.GET_DOCUMENT_TYPES,
    `${baseUrl}?search=${name}`
  );
};

const getDocumentTypeById = async (
  id: number
) => {
  return fetchWrapper.get(
    DocumentTypeActionType.GET_DOCUMENT_TYPE_ID,
    `${baseUrl}${id}/`
  );
};

const submit = async (
  isEdit: boolean,
  request: RequestDocumentTypeEntity
) => {
  return isEdit
    ? fetchWrapper.put(
        DocumentTypeActionType.UPDATE_DOCUMENT_TYPE,
        `${baseUrl}${request.id}/`,
        request
      )
    : fetchWrapper.post(
        DocumentTypeActionType.SUBMIT_DOCUMENT_TYPE,
        `${baseUrl}`,
        request
      );
};

const remove = async (
  id: number
) => {
  return fetchWrapper.delete(
    DocumentTypeActionType.REMOVE_DOCUMENT_TYPE,
    `${baseUrl}${id}/`
  );
};

export const DocumentTypeService = {
  getDocumentTypes,
  getDocumentTypeById,
  submit,
  remove
};
