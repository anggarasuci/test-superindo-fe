import { DocumentTypeStore } from "src/domain/store/document-type-store";

const removeDocumentTypeUseCase = async (
  store: DocumentTypeStore,
  id: number
) => {
  await store.remove(id);
};

export { removeDocumentTypeUseCase };
