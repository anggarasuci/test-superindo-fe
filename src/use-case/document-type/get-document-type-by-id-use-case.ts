import { DocumentTypeStore } from "src/domain/store/document-type-store";

const getDocumentTypeByIdUseCase = async (
  store: DocumentTypeStore,
  id: number
) => {
  await store.getDocumentTypeById(id);
};

export { getDocumentTypeByIdUseCase };
