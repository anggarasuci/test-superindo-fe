import { DocumentTypeService } from "src/data/service/document-type-service";
import { mapResponse } from "src/helpers/map-response";
import { DocumentTypeEntity, RequestDocumentTypeEntity } from "../entity/document-type-entity";
import { ResponseEntity } from "../entity/response-entity";

const getDocumentTypes = async (name?: string): Promise<ResponseEntity<[DocumentTypeEntity]>> => {
  return mapResponse(await DocumentTypeService.getDocumentTypes(name));
};

const getDocumentTypeById = async (
  id: number
): Promise<ResponseEntity<DocumentTypeEntity>> => {
  return mapResponse(
    await DocumentTypeService.getDocumentTypeById(id)
  );
};

const submit = async (
  isEdit: boolean,
  request: RequestDocumentTypeEntity,
): Promise<ResponseEntity<DocumentTypeEntity>> => {
  return mapResponse(await DocumentTypeService.submit(isEdit, request));
};

const remove = async (
  id: number
): Promise<ResponseEntity<DocumentTypeEntity>> => {
  return mapResponse(await DocumentTypeService.remove(id));
};

export const DocumentTypeRepository = {
  getDocumentTypes,
  getDocumentTypeById,
  submit,
  remove
};
