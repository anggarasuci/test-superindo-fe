import { DocumentTypeEntity, RequestDocumentTypeEntity } from "src/domain/entity/document-type-entity";
import { DocumentTypeStore } from "src/domain/store/document-type-store";

const submitDocumentTypeUseCase = async (
  store: DocumentTypeStore,
  isEdit: boolean,
  id: number| null,
  name: string | "",
  description: string | ""
) => {
  await store.submit(isEdit, createParams(id, name, description));
};

const createParams = (id: number, name: string, description: string): RequestDocumentTypeEntity => {
  let result: RequestDocumentTypeEntity = {
    id: id ? id.toString() : "",
    name: name,
    description: description
  };
  return result;
};

export { submitDocumentTypeUseCase };
