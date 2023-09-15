import { DocumentTypeStore } from "src/domain/store/document-type-store";

const getDocumentTypesUseCase = async (
  store: DocumentTypeStore,
  name: string
) => {
  await store.getDocumentTypes(name);
};

export { getDocumentTypesUseCase };
